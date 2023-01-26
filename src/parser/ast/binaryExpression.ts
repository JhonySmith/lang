import { NumberValue } from 'lang/lib/numberValue';
import { StringValue } from 'lang/lib/stringValue';
import { Expression } from './expression';

export class BinaryExpression implements Expression {
  private expr1: Expression;
  private expr2: Expression;

  private operation: string;

  constructor(operation: string, expr1: Expression, expr2: Expression) {
    this.operation = operation;

    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  public eval() {
    const val1 = this.expr1.eval();
    const val2 = this.expr2.eval();

    if (val1 instanceof StringValue || val2 instanceof StringValue) {
      switch (this.operation) {
        case '+':
          return new StringValue(val1.asString() + val2.asString());
        case '-':
        case '*':
        case '/':
        default:
          throw new Error('Строки можно только складывать');
      }
    } else {
      const op1: number = val1.asNumber();
      const op2: number = val2.asNumber();

      switch (this.operation) {
        case '-':
          return new NumberValue(op1 - op2);
        case '*':
          return new NumberValue(op1 * op2);
        case '/':
          return new NumberValue(op1 / op2);
        case '+':
        default:
          return new NumberValue(op1 + op2);
      }
    }
  }
}
