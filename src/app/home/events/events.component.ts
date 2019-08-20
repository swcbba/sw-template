import { Component, OnInit } from '@angular/core';

import { Event } from '../../shared/models/event.model';
import { mockEvents } from '../../shared/constants/mocks';

@Component({
  selector: 'sw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events$: Event[];

  constructor() {}

  ngOnInit(): void {
    this.events$ = mockEvents;
  }
}
