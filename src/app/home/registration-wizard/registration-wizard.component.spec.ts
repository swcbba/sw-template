import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';

import { RegistrationWizardComponent } from './registration-wizard.component';
import { RegisterYourInfoComponent } from './register-your-info/register-your-info.component';
import { ChoosePaymentMethodComponent } from './choose-payment-method/choose-payment-method.component';
import { ThanksComponent } from './thanks/thanks.component';

describe('RegistrationWizardComponent', () => {
  let component: RegistrationWizardComponent;
  let fixture: ComponentFixture<RegistrationWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationWizardComponent,
        RegisterYourInfoComponent,
        ChoosePaymentMethodComponent,
        ThanksComponent
      ],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        MatStepperModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
