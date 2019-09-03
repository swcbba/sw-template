import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { EventService } from './event.service';
import { DataOrder } from './../../shared/models/data-order.enum';
import { Event } from '../../shared/models/event.model';


@Component({
  selector: 'sw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events$ = this.eventService.getAllSorted('date', DataOrder.asc);
  }
}
