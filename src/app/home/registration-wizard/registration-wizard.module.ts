import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';

import { TranslateModule } from '@ngx-translate/core';

import { RegistrationWizardComponent } from './registration-wizard.component';
import { ChoosePaymentMethodComponent } from './choose-payment-method/choose-payment-method.component';
import { RegisterYourInfoComponent } from './register-your-info/register-your-info.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [
    RegistrationWizardComponent,
    ChoosePaymentMethodComponent,
    RegisterYourInfoComponent,
    ThanksComponent
  ],
  imports: [CommonModule, TranslateModule, MatStepperModule],
  exports: [RegistrationWizardComponent]
})
export class RegistrationWizardModule {}
