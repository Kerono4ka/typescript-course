import { Validator } from '../../validator/validator';

export function Positive(target: any, propName: string) {
  const validator = Validator.getInstance();
  validator.registerValidator(
    target.constructor.name,
    propName,
    'positive',
    null
  );
}
