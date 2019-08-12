import { Component } from '@angular/core';

import { CountdownService } from './countdown.service';

@Component({
  selector: 'sw-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  constructor(public countdownService: CountdownService) {}
}
