import { Component, OnInit } from '@angular/core';

import { LanguageService } from './core/services/language.service';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
    private facebookService: FacebookService
  ) {}

  ngOnInit(): void {
    this.languageService.setDefaultLanguage();
    this.initFacebookService();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { appId: '394413123907241', xfbml: true, version: 'v3.2' };
    this.facebookService.init(initParams).then();
  }
}
