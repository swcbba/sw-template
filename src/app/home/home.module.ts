import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { CountdownComponent } from './countdown/countdown.component';
import { MetricsComponent } from './metrics/metrics.component';
import { PartnersComponent } from './partners/partners.component';
import { ScrollSpyDirective } from './scroll-spy.directive';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BannerComponent,
    CountdownComponent,
    MetricsComponent,
    PartnersComponent,
    ScrollSpyDirective
  ],
  imports: [CommonModule, HomeRoutingModule, TranslateModule]
})
export class HomeModule {}
