import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

const DEFAULT_LANGUAGES: string[] = ['en', 'es'];

@Injectable()
export class LanguageService {
  changeLanguage$: Observable<string>;
  currentLanguage = DEFAULT_LANGUAGES[0];
  private languageChanged = new Subject<string>();

  constructor(private translateService: TranslateService) {
    this.changeLanguage$ = this.languageChanged.asObservable();
  }

  setDefaultLanguage(): void {
    const browserLanguage = this.translateService.getBrowserLang();
    const isValidLanguage = DEFAULT_LANGUAGES.find(
      defaultLanguage => defaultLanguage === browserLanguage
    );
    isValidLanguage
      ? this.switchLanguage(browserLanguage)
      : this.translateService.setDefaultLang(this.currentLanguage);
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translateService.use(language);
    this.languageChanged.next(language);
  }
}
