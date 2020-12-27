import { MutableRefObject } from 'react';

export interface refsType {
  titleRef: MutableRefObject<HTMLInputElement|null>;
  descriptionRef: MutableRefObject<HTMLInputElement|null>;
}
