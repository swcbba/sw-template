import { Component } from '@angular/core';

import { EVENT_NAME } from '../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  eventName = EVENT_NAME;
}
