import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { ScheduleService } from './schedule.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('ScheduleService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        ScheduleService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    })
  );

  it('should be created', () => {
    const service: ScheduleService = TestBed.get(ScheduleService);
    expect(service).toBeTruthy();
  });
});
