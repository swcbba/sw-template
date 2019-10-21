import { firestore } from 'firebase';

import { DataType } from './data-type.model';

export interface Event extends DataType {
  bannerUrl: string;
  date: firestore.Timestamp;
  description: string;
  link: string;
  logoUrl: string;
  name: string;
  place: string;
  price: number;
  type: string;
}
