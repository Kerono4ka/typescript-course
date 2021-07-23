export type optionsType = { [optionName: string]: any } | null;

export interface ValidatorConfig {
  [className: string]: {
    [propertyName: string]: {
      [validationType: string]: optionsType;
    };
  };
}
