import { DataType } from './data-type.model';

export interface Metric extends DataType {
  nameSp: string;
  nameEn: string;
  value: string;
}
