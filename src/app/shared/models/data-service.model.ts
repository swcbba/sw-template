import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataType } from './data-type.model';
import { DataOrder } from './data-order.enum';
import { FirestoreCollection } from './firestore-collection.enum';

const DELETE_FLAG = 'deleteFlag';

export abstract class DataService<T extends DataType> {
  dataCollection: AngularFirestoreCollection<T>;

  constructor(
    protected db: AngularFirestore,
    protected collectionName: FirestoreCollection
  ) {
    this.dataCollection = db.collection<T>(collectionName, ref =>
      ref.where(DELETE_FLAG, '==', false)
    );
  }

  getAll(): Observable<T[]> {
    return this.dataCollection.valueChanges();
  }

  getAllSorted(
    field: string,
    order: DataOrder,
    maxLimit?: number
  ): Observable<T[]> {
    return this.db
      .collection<T>(this.collectionName, ref => {
        let query = ref.where(DELETE_FLAG, '==', false).orderBy(field, order);

        if (maxLimit) {
          query = query.limit(maxLimit);
        }

        return query;
      })
      .valueChanges();
  }

  getById(id: string): Observable<T> {
    return this.db
      .doc<T>(`${this.collectionName}/${id}`)
      .valueChanges()
      .pipe(
        map(data => {
          if (data && !data.deleteFlag) {
            return data;
          }

          return null;
        })
      );
  }
}
