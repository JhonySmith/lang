import { NumberValue } from 'lang/lib/numberValue';
import { Expression } from './expression';

export class ConditionalExpression implements Expression {
  private expr1: Expression;
  private expr2: Expression;

  private operation: string;

  constructor(operation: string, expr1: Expression, expr2: Expression) {
    this.operation = operation;

    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  public eval() {
    const op1: number = this.expr1.eval().asNumber();
    const op2: number = this.expr2.eval().asNumber();

    switch (this.operation) {
      case '<':
        return new NumberValue(op1 < op2);
      case '>':
        return new NumberValue(op1 > op2);
      case '=':
      default:
        return new NumberValue(op1 === op2);
    }
  }
}
