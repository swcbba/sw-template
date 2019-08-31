import { DataType } from './data-type.model';

export interface Mentor extends DataType {
  name: string;
  order: number;
  roleEn: string;
  roleSp: string;
  photoUrl: string;
  profession: string;
  placeOfBirth: string;
  biography: string;
}
