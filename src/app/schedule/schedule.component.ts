import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ScheduleService } from './schedule.service';
import { Schedule } from '../shared/models/schedule.model';
import { LanguageService } from '../core/services/language.service';

@Component({
  selector: 'sw-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule$: Observable<Schedule[]>;

  constructor(
    private scheduleService: ScheduleService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.schedule$ = this.scheduleService.getAll();
  }
}
