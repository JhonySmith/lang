import { Value } from 'lang/lib/value';
import { Variables } from 'lang/lib/variables';
import { Expression } from './expression';
import { Statement } from './statement';

export class AssignmentStatement implements Statement {
  private variable: string;
  private expression: Expression;

  constructor(variable: string, expression: Expression) {
    this.variable = variable;
    this.expression = expression;
  }

  execute(): void {
    const result: Value = this.expression.eval();
    Variables.set(this.variable, result);
  }
}
