import { MaxLength } from '../decorators/validators/maxLength';
import { RequiredProp } from '../decorators/validators/requiredProp';
import { Positive } from '../decorators/validators/positive';
import { Validator } from '../validator/validator';

export class Project {
  @MaxLength(5)
  @RequiredProp
  title: string;

  @MaxLength(10)
  @RequiredProp
  description: string;

  @Positive
  @RequiredProp
  people: number;

  @RequiredProp
  id: string;

  constructor(title: string, description: string, people: number) {
    this.title = title;
    this.description = description;
    this.people = people;
    this.id = `id-${(((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1)}`;
  }

  isProjectValid() {
    const validator = Validator.getInstance();
    return validator.validate(this);
  }
}
