import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { MentorService } from './mentor.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('MentorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        MentorService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    })
  );

  it('should be created', () => {
    const service: MentorService = TestBed.get(MentorService);
    expect(service).toBeTruthy();
  });
});
