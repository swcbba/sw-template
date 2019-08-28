import { firestore } from 'firebase';

import { DataType } from './data-type.model';

export interface Event extends DataType {
  name: string;
  link: string;
  place: string;
  logoUrl: string;
  bannerUrl: string;
  date: firestore.Timestamp;
}
