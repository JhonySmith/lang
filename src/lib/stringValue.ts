import { Value } from './value';

export class StringValue implements Value {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  asString(): string {
    return this.value;
  }

  asNumber(): number {
    let number = Number(this.value);

    if (isNaN(number)) {
      return 0;
    }

    return number;
  }
}
