import { Component } from '@angular/core';

import { REGISTRATION_FORM_URL } from '../../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-register-your-info',
  templateUrl: './register-your-info.component.html',
  styleUrls: ['./register-your-info.component.scss']
})
export class RegisterYourInfoComponent {
  registrationFormUrl = REGISTRATION_FORM_URL;
}
