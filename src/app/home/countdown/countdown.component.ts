import { Component, OnInit } from '@angular/core';

import { CountdownService } from './countdown.service';

@Component({
  selector: 'sw-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  constructor(public countdownService: CountdownService) {}

  ngOnInit(): void {}
}
