import { Component } from '@angular/core';

import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private languageService: LanguageService) {}
  ngOnInit(): void {
    this.languageService.setDefaultLanguage();
  }
}
