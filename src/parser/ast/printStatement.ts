import { Expression } from './expression';
import { Statement } from './statement';

export class PrintStatement implements Statement {
  expression: Expression;

  constructor(expression: Expression) {
    this.expression = expression;
  }

  execute(): void {
    console.log(this.expression.eval().asString());
  }
}
