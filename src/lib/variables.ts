import { NumberValue } from './numberValue';
import { Value } from './value';

export class Variables {
  static nullNumberValue: Value = new NumberValue(0);
  static variables: Map<string, Value>;

  static {
    Variables.variables = new Map();
    Variables.variables.set('PI', new NumberValue(Math.PI));
    Variables.variables.set('E', new NumberValue(Math.E));
  }

  static isExist(key: string): boolean {
    return Variables.variables.has(key);
  }

  static get(key: string): Value {
    let value = Variables.variables.get(key);
    if (value) {
      return value;
    } else {
      return new NumberValue(0);
    }
  }

  static set(key: string, value: Value): void {
    Variables.variables.set(key, value);
  }
}
