import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MentorService } from './mentor.service';
import { Mentor } from '../../shared/models/mentor.model';

@Component({
  selector: 'sw-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  mentors$: Observable<Mentor[]>;

  constructor(private mentorService: MentorService) {}

  ngOnInit() {
    this.mentors$ = this.mentorService.getAll();
  }
}
