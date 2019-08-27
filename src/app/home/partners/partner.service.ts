import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FirestoreCollection } from 'src/app/shared/models/firestore-collection.enum';
import { DataService } from 'src/app/shared/models/data-service.model';
import { Partner } from 'src/app/shared/models/partner.model';

@Injectable()
export class PartnerService extends DataService<Partner> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.partners);
  }
}
