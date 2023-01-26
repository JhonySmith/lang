import { NumberValue } from 'lang/lib/numberValue';
import { Expression } from './expression';

export class UnaryExpression implements Expression {
  private expr1: Expression;
  private operation: string;

  constructor(operation: string, expr1: Expression) {
    this.operation = operation;

    this.expr1 = expr1;
  }

  public eval() {
    const value: number = this.expr1.eval().asNumber();

    switch (this.operation) {
      case '-':
        return new NumberValue(-value);
      case '+':
      default:
        return new NumberValue(value);
    }
  }
}
