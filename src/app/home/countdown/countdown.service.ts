import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';

import { TimeRemaining } from '../../shared/models/time-remaining.model';
import { EventDate } from '../../shared/constants/event-data.constant';

const dateFormat = 'DD-MM-YYYY HH:mm';
const daysString = 'days';
const hoursString = 'hours';
const minutesString = 'minutes';
const secondsString = 'seconds';
const millisecondsInASecond = 1000;
const daysInAYear = 365;
const hoursInADay = 24;
const sixty = 60;

@Injectable()
export class CountdownService {
  timeRemaining$: Observable<TimeRemaining>;
  eventAlreadyStarted = false;
  private timeChanged = new Subject<TimeRemaining>();

  constructor() {
    this.timeRemaining$ = this.timeChanged.asObservable();
    this.setTimeRemaining();
  }

  private setTimeRemaining(): void {
    setInterval(() => {
      const date = moment(EventDate, dateFormat);
      const now = moment();
      const days = date.diff(now, daysString) % daysInAYear;
      const hours = date.diff(now, hoursString) % hoursInADay;
      const minutes = date.diff(now, minutesString) % sixty;
      const seconds = date.diff(now, secondsString) % sixty;
      this.eventAlreadyStarted = date.isSameOrBefore(now);

      this.timeChanged.next({ days, hours, minutes, seconds });
    }, millisecondsInASecond);
  }
}
