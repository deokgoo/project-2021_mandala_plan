import { MutableRefObject } from 'react';

export type mandalaStatusType = {
  isCore: boolean;
  dreamNum?: number|null;
  boxNum?: number|null;
}

export interface refsType {
  titleRef: MutableRefObject<HTMLInputElement|null>;
  descriptionRef: MutableRefObject<HTMLInputElement|null>;
}
