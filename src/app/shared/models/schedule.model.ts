import { DataType } from './data-type.model';

export interface Schedule extends DataType {
  date: Date;
  items: ScheduleItem[];
}

export interface ScheduleItem {
  hour: string;
  actionEn: string;
  actionEs: string;
  descriptionEn: string;
  descriptionEs: string;
}
