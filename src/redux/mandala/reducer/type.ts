export type unitNumType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type mandalaUnitType = { title: string, description: string };

export type mandalaDreamType = { core: mandalaUnitType; side: dreamType };

export type dreamType = [
  mandalaUnitType,
  mandalaUnitType,
  mandalaUnitType,
  mandalaUnitType,
  mandalaUnitType,
  mandalaUnitType,
  mandalaUnitType,
  mandalaUnitType,
];

export type sideDreamType = 'dream0'|'dream1'|'dream2'|'dream3'|'dream4'|'dream5'|'dream6'|'dream7';

export interface unitType {
  core: mandalaUnitType;
  side: dreamType;
}

export type mandalaStatusType = {
  isCore: boolean;
  dreamNum?: number|null;
  unitNum?: number|null;
}

export type stateType = {
  [dream in sideDreamType]: unitType;
} & {
  dreamCore: { core: mandalaUnitType; side: dreamType; };
} & { mandalaState: mandalaStatusType };