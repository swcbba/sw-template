const Puppeteer = require('puppeteer');
const Express = require('express');
const { join, dirname } = require('path');
const { readFile, exists, writeFile, mkdir } = require('mz/fs');

const PORT = 4000;
const HOST = `http://localhost:${PORT}`;
const ROOT_PATH = 'dist/sw-template';
const STATIC_PATHS = require('./static-paths');
const MESSENGER_BUTTON = require('./messenger-button');

async function main() {
  const app = Express();
  const index = (await readFile(
    join(process.cwd(), ROOT_PATH, 'index.html')
  )).toString();

  app.get('*.*', Express.static(join(process.cwd(), ROOT_PATH)));
  app.get('*', (req, res) => res.send(index));

  const server = await new Promise((resolve, reject) => {
    const createdServer = app.listen(PORT, error =>
      error ? reject(error) : resolve(createdServer)
    );
  });
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();

  for (const currentPath of STATIC_PATHS.PATHS) {
    await page.goto(`${HOST}/${currentPath}`);

    let result = await page.evaluate(
      () => '<!doctype html>' + document.documentElement.outerHTML
    );

    if (!currentPath) {
      result = addMessengerButtonToHome(result);
    }

    const file = join(
      process.cwd(),
      ROOT_PATH,
      (currentPath || 'index') + '.html'
    );
    const dir = dirname(file);

    if (!(await exists(dir))) {
      await mkdir(dir);
    }

    await writeFile(file, result);
    console.log('Written file:', file);
  }

  browser.close();
  server.close();
}

function addMessengerButtonToHome(indexContent) {
  const closeBodyIndex = indexContent.indexOf('</body>');
  return (
    indexContent.slice(0, closeBodyIndex) +
    MESSENGER_BUTTON +
    indexContent.slice(closeBodyIndex)
  );
}

main()
  .then(() => console.log('All right!'))
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
