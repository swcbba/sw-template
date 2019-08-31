import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../../shared/models/data-service.model';
import { Mentor } from '../../shared/models/mentor.model';
import { FirestoreCollection } from '../../shared/models/firestore-collection.enum';

@Injectable()
export class MentorService extends DataService<Mentor> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.mentors);
  }
}
