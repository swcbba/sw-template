import { DataType } from './data-type.model';

export interface Partner extends DataType {
  category: string;
  items: PartnerItem[];
}

export interface PartnerItem {
  logoUrl: string;
  name: string;
  website: string;
}
