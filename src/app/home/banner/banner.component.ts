import { Component } from '@angular/core';

import {
  EVENT_NAME,
  REGISTRATION_FORM_URL
} from '../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  eventName = EVENT_NAME;
  registrationFormUrl = REGISTRATION_FORM_URL;
}
