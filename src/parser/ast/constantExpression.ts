import { Variables } from 'lang/lib/variables';
import { Expression } from './expression';

export class ConstantExpression implements Expression {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public eval() {
    if (!Variables.isExist(this.name)) throw new Error('Неизвестный символ');
    return Variables.get(this.name);
  }
}
