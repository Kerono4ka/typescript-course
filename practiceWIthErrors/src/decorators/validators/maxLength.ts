import { Validator } from '../../validator/validator';

export function MaxLength(length: number) {
  return function (target: any, propName: string) {
    const validator = Validator.getInstance();
    validator.registerValidator(
      target.constructor.name,
      propName,
      'maxLength',
      {
        length,
      }
    );
  };
}
