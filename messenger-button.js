module.exports = `
<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: 'v4.0'
    });
  };
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>
<div class="fb-customerchat" attribution=setup_tool page_id="394413123907241" theme_color="#f47f16"
  logged_in_greeting="¡Hola!, ¿cómo podemos ayudarte?" logged_out_greeting="¡Hola!, ¿cómo podemos ayudarte?">
</div>
`;
