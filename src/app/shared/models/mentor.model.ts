import { DataType } from './data-type.model';

export interface Mentor extends DataType {
  name: string;
  detail: string;
  photoUrl: string;
  profession: string;
  placeOfBirth: string;
}
