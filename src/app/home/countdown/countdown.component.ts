import { Component } from '@angular/core';

import { CountdownService } from './countdown.service';

@Component({
  selector: 'sw-countdown',
  templateUrl: './countdown.component.html'
})
export class CountdownComponent {
  constructor(public countdownService: CountdownService) {}
}
