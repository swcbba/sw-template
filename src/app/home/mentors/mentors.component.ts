import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageService } from '../../core/services/language.service';
import { MentorService } from './mentor.service';
import { Mentor } from '../../shared/models/mentor.model';
import { DataOrder } from '../../shared/models/data-order.enum';

@Component({
  selector: 'sw-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  mentors$: Observable<Mentor[]>;

  constructor(
    private mentorService: MentorService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.mentors$ = this.mentorService.getAllSorted('order', DataOrder.asc);
  }
}
