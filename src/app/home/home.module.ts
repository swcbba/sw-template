import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownService } from './countdown/countdown.service';
import { EventService } from './events/event.service';
import { MentorService } from './mentors/mentor.service';
import { MetricsComponent } from './metrics/metrics.component';
import { MoreDetailsComponent } from './about/more-details/more-details.component';
import { PartnersComponent } from './partners/partners.component';
import { TwoDigitsTransformPipe } from './countdown/two-digits-transform.pipe';
import { EventsComponent } from './events/events.component';
import { PartnerService } from './partners/partner.service';
import { RegistrationWizardModule } from './registration-wizard/registration-wizard.module';
import { MentorsComponent } from './mentors/mentors.component';
import { ParallaxModule } from '../shared/directives/parallax/parallax.module';
import { TransparentNavbarModule } from '../shared/directives/transparent-navbar/transparent-navbar.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BannerComponent,
    CountdownComponent,
    MetricsComponent,
    MoreDetailsComponent,
    PartnersComponent,
    TwoDigitsTransformPipe,
    EventsComponent,
    MentorsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    RegistrationWizardModule,
    ParallaxModule,
    TransparentNavbarModule
  ],
  providers: [CountdownService, EventService, PartnerService, MentorService]
})
export class HomeModule {}
