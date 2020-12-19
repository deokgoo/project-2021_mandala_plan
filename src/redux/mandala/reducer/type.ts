export type boxNumType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type mandalaUnitType = { title: string, description: string };

type dreamType = [
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

export type stateType = {
  [dream in sideDreamType]?: dreamType;
} & {
  dreamCore: { core: mandalaUnitType; side: dreamType; };
};