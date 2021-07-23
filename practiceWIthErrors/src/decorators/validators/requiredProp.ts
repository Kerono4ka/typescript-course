import { Validator } from '../../validator/validator';

export function RequiredProp(target: any, propName: string) {
  const validator = Validator.getInstance();
  validator.registerValidator(
    target.constructor.name,
    propName,
    'requiredProp',
    null
  );
}
