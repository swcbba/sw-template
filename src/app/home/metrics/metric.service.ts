import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../../shared/models/data-service.model';
import { Metric } from '../../shared/models/metric.model';
import { FirestoreCollection } from '../../shared/models/firestore-collection.enum';

@Injectable()
export class MetricService extends DataService<Metric> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.metrics);
  }
}
