import { TestBed } from '@angular/core/testing';

import { PartnerService } from './partner.service';
import { AngularFirestore } from '@angular/fire/firestore';

const angularFirestoreMock = {
  collection: () => {}
};

describe('PartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PartnerService,
      { provide: AngularFirestore, useValue: angularFirestoreMock }
    ]
  }));

  it('should be created', () => {
    const service: PartnerService = TestBed.get(PartnerService);
    expect(service).toBeTruthy();
  });
});
