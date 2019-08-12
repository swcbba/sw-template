import { Component, OnInit } from '@angular/core';

import { SW_NAME } from '../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  swName = SW_NAME;

  constructor() {}

  ngOnInit() {}
}
