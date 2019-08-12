import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownService } from './countdown/countdown.service';
import { MetricsComponent } from './metrics/metrics.component';
import { PartnersComponent } from './partners/partners.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { TwoDigitsTransformPipe } from './countdown/two-digits-transform.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BannerComponent,
    CountdownComponent,
    MetricsComponent,
    PartnersComponent,
    ScrollSpyDirective,
    TwoDigitsTransformPipe
  ],
  imports: [CommonModule, HomeRoutingModule, TranslateModule, SharedModule],
  providers: [CountdownService]
})
export class HomeModule {}
