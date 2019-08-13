import { Component } from '@angular/core';

import {
  SW_NAME,
  EVENT_CITY
} from '../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  swName = SW_NAME;
  eventCity = EVENT_CITY;
}
