import { isNumber } from 'lang/helpers/checkers';
import { NumberValue } from 'lang/lib/numberValue';
import { StringValue } from 'lang/lib/stringValue';
import { Value } from 'lang/lib/value';
import { Expression } from './expression';

export class ValueExpression implements Expression {
  private value: Value;

  constructor(value: number | string) {
    if (isNumber(value)) {
      this.value = new NumberValue(value);
    } else {
      this.value = new StringValue(value);
    }
  }

  public eval() {
    return this.value;
  }
}
