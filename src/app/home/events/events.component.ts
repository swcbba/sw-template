import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { EventService } from './event.service';
import { Event } from '../../shared/models/event.model';


@Component({
  selector: 'sw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  eventSub: Subscription;
  events: Event[];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventSub = this.eventService.getAll().subscribe(events => {
      if (events !== undefined) {
        this.events = events;
      }
    });
  }

  ngOnDestroy(): void {
    this.eventSub.unsubscribe();
  }
}
