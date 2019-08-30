import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownService } from './countdown/countdown.service';
import { EventService } from './events/event.service';
import { AboutComponent } from './about/about.component';
import { MoreDetailsComponent } from './about/more-details/more-details.component';
import { RegistrationWizardComponent } from './registration-wizard/registration-wizard.component';
import { RegisterYourInfoComponent } from './registration-wizard/register-your-info/register-your-info.component';
import { ChoosePaymentMethodComponent } from './registration-wizard/choose-payment-method/choose-payment-method.component';
import { ThanksComponent } from './registration-wizard/thanks/thanks.component';
import { EventsComponent } from './events/events.component';
import { PartnersComponent } from './partners/partners.component';
import { TwoDigitsTransformPipe } from './countdown/two-digits-transform.pipe';
import { PartnerService } from './partners/partner.service';

const angularFirestoreMock = {
  getAll: () => of([])
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        BannerComponent,
        CountdownComponent,
        AboutComponent,
        MoreDetailsComponent,
        RegistrationWizardComponent,
        RegisterYourInfoComponent,
        ChoosePaymentMethodComponent,
        ThanksComponent,
        EventsComponent,
        PartnersComponent,
        TwoDigitsTransformPipe
      ],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        MatStepperModule
      ],
      providers: [
        CountdownService,
        { provide: EventService, useValue: angularFirestoreMock },
        { provide: PartnerService, useValue: angularFirestoreMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
