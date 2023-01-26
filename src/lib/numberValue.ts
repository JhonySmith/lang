import { isNumber } from 'lang/helpers/checkers';
import { Value } from './value';

export class NumberValue implements Value {
  private value: number;

  constructor(value: number | boolean) {
    if (isNumber(value)) {
      this.value = value;
    } else {
      this.value = value ? 1 : 0;
    }
  }

  asNumber(): number {
    return this.value;
  }

  asString(): string {
    return String(this.value);
  }
}
