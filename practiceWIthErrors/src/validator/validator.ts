import { ValidatorConfig, optionsType } from '../models/validator';

export class Validator {
  private registeredValidators: ValidatorConfig = {};
  private static instance: Validator;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Validator();
    }
    return this.instance;
  }

  validate(validatableObj: any) {
    const propsObj = this.registeredValidators[validatableObj.constructor.name];
    for (const propName in propsObj) {
      const validations = propsObj[propName];
      for (const validationsName in validations) {
        switch (validationsName) {
          case 'requiredProp':
            if (
              !validatableObj.hasOwnProperty(propName) ||
              !validatableObj[propName]
            ) {
              return false;
            }
            break;
          case 'positive':
            if (validatableObj[propName] < 0) {
              return false;
            }
            break;
          case 'maxLength':
            if (
              validatableObj[propName].length >
              validations[validationsName]?.['length']
            ) {
              return false;
            }
            break;
          default:
            return false;
        }
      }
    }
    return true;
  }

  registerValidator(
    className: string,
    propName: string,
    validationName: string,
    options: optionsType
  ) {
    this.registeredValidators[className] = {
      ...this.registeredValidators[className],
      [propName]: {
        ...this.registeredValidators[className]?.[propName],
        [validationName]: options,
      },
    };
    // console.log(this.registeredValidators);
  }
}
