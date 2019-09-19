import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { MetricService } from './metric.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('MetricService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        MetricService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    })
  );

  it('should be created', () => {
    const service: MetricService = TestBed.get(MetricService);
    expect(service).toBeTruthy();
  });
});
