import { Expression } from './expression';
import { Statement } from './statement';

export class IfStatement implements Statement {
  private expression: Expression;
  private ifStatement: Statement;
  private elseStatement: Statement | null;

  constructor(
    expression: Expression,
    ifStatement: Statement,
    elseStatement: Statement | null
  ) {
    this.expression = expression;
    this.ifStatement = ifStatement;
    this.elseStatement = elseStatement;
  }

  execute(): void {
    const result: number = this.expression.eval().asNumber();

    if (result) {
      this.ifStatement.execute();
    } else if (this.elseStatement && !result) {
      this.elseStatement.execute();
    }
  }
}
