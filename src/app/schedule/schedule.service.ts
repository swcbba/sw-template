import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FirestoreCollection } from '../shared/models/firestore-collection.enum';
import { DataService } from '../shared/models/data-service.model';
import { Schedule } from '../shared/models/schedule.model';

@Injectable()
export class ScheduleService extends DataService<Schedule> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.schedule);
  }
}
