import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { EventService } from './event.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('EventService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        EventService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    })
  );

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });
});
