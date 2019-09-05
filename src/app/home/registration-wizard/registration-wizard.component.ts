import { Component } from '@angular/core';

import { REGISTRATION_FORM_URL } from '../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-registration-wizard',
  templateUrl: './registration-wizard.component.html',
  styleUrls: ['./registration-wizard.component.scss']
})
export class RegistrationWizardComponent {
  isLinear = true;
  registrationFormUrl = REGISTRATION_FORM_URL;
}
