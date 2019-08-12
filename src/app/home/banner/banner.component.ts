import { Component } from '@angular/core';

import { RegistrationFormUrl } from '../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  registrationFormUrl = RegistrationFormUrl;
}
