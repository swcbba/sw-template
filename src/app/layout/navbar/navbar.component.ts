import { Component } from '@angular/core';

import { EVENT_NAME } from '../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  eventName = EVENT_NAME;
}
