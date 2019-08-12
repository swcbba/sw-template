import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';

import { TimeRemaining } from '../../shared/models/time-remaining.model';
import { EVENT_DATE } from '../../shared/constants/event-data.constant';

const DATE_FORMAT = 'DD-MM-YYYY HH:mm';
const DAYS = 'days';
const HOURS = 'hours';
const MINUTES = 'minutes';
const SECONDS = 'seconds';
const MILLISECONDS_IN_A_SECOND = 1000;
const DAYS_IN_A_YEAR = 365;
const HOURS_IN_A_DAY = 24;
const SIXTY = 60;

@Injectable()
export class CountdownService {
  eventAlreadyStarted = false;
  timeRemaining$: Observable<TimeRemaining>;
  private timeChanged = new Subject<TimeRemaining>();

  constructor() {
    this.timeRemaining$ = this.timeChanged.asObservable();
    this.setTimeRemaining();
  }

  private setTimeRemaining(): void {
    setInterval(() => {
      const date = moment(EVENT_DATE, DATE_FORMAT);
      const now = moment();
      const days = date.diff(now, DAYS) % DAYS_IN_A_YEAR;
      const hours = date.diff(now, HOURS) % HOURS_IN_A_DAY;
      const minutes = date.diff(now, MINUTES) % SIXTY;
      const seconds = date.diff(now, SECONDS) % SIXTY;
      this.eventAlreadyStarted = date.isSameOrBefore(now);

      this.timeChanged.next({ days, hours, minutes, seconds });
    }, MILLISECONDS_IN_A_SECOND);
  }
}
