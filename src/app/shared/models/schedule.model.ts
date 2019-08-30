import { firestore } from 'firebase';

import { DataType } from './data-type.model';

export interface Schedule extends DataType {
  date: firestore.Timestamp;
  items: ScheduleItem[];
}

export interface ScheduleItem {
  hour: string;
  actionEn: string;
  actionEs: string;
  descriptionEn: string;
  descriptionEs: string;
}
