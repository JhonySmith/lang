import { TokenType } from './tokenType';
import { Token } from './token';
import {
  Statement,
  PrintStatement,
  AssignmentStatement,
  Expression,
  BinaryExpression,
  UnaryExpression,
  ConstantExpression,
  ValueExpression,
  ConditionalExpression,
} from './ast';
import { IfStatement } from './ast/ifStatement';

export class Parser {
  private static EOF: Token = new Token(TokenType.EOF, '');
  private _tokens: Token[];

  private pos: number;
  private size: number;

  constructor(tokens: Token[]) {
    this._tokens = tokens;
    this.pos = 0;
    this.size = tokens.length;
  }

  parse(): Statement[] {
    const result: Statement[] = [];

    while (!this.match(TokenType.EOF)) {
      result.push(this.statement());
    }

    return result;
  }

  private statement(): Statement {
    if (this.match(TokenType.PRINT)) {
      return new PrintStatement(this.expression());
    }

    if (this.match(TokenType.IF)) {
      return this.ifElse();
    }

    return this.assignmentStatement();
  }

  private assignmentStatement(): Statement {
    const currentToken: Token = this.get(0);

    if (this.match(TokenType.WORD) && this.get(0).type === TokenType.EQ) {
      const variable: string = currentToken.text;

      this.consume(TokenType.EQ);

      return new AssignmentStatement(variable, this.expression());
    }

    throw new Error('Неизвестный оператор');
  }

  private ifElse(): Statement {
    const condition: Expression = this.expression();
    const ifStatement: Statement = this.statement();
    let elseStatement: Statement | null;

    if (this.match(TokenType.ELSE)) {
      elseStatement = this.statement();
    } else {
      elseStatement = null;
    }

    return new IfStatement(condition, ifStatement, elseStatement);
  }

  private expression(): Expression {
    return this.conditional();
  }

  private conditional(): Expression {
    let result: Expression = this.additive();

    while (true) {
      if (this.match(TokenType.EQEQ)) {
        result = new ConditionalExpression('=', result, this.additive());
        continue;
      }
      if (this.match(TokenType.EXCLEQ)) {
        result = new ConditionalExpression('=', result, this.additive());
        continue;
      }
      if (this.match(TokenType.LT)) {
        result = new BinaryExpression('<', result, this.additive());
        continue;
      }
      if (this.match(TokenType.LTEQ)) {
        result = new BinaryExpression('<', result, this.additive());
        continue;
      }
      if (this.match(TokenType.GT)) {
        result = new BinaryExpression('>', result, this.additive());
        continue;
      }

      if (this.match(TokenType.GTEQ)) {
        result = new BinaryExpression('>', result, this.additive());
        continue;
      }

      break;
    }

    return result;
  }

  private additive(): Expression {
    let result: Expression = this.multiplicative();

    while (true) {
      if (this.match(TokenType.PLUS)) {
        result = new BinaryExpression('+', result, this.multiplicative());
        continue;
      }

      if (this.match(TokenType.MINUS)) {
        result = new BinaryExpression('-', result, this.multiplicative());
        continue;
      }

      break;
    }

    return result;
  }

  private multiplicative(): Expression {
    let result: Expression = this.unary();

    while (true) {
      if (this.match(TokenType.STAR)) {
        result = new BinaryExpression('*', result, this.unary());
        continue;
      }

      if (this.match(TokenType.SLASH)) {
        result = new BinaryExpression('/', result, this.unary());
        continue;
      }

      break;
    }

    return result;
  }

  private unary(): Expression {
    if (this.match(TokenType.MINUS)) {
      return new UnaryExpression('-', this.primary());
    }

    if (this.match(TokenType.PLUS)) {
      return new UnaryExpression('+', this.primary());
    }

    return this.primary();
  }

  private primary(): Expression {
    const currentToken = this.get(0);

    if (this.match(TokenType.NUMBER)) {
      return new ValueExpression(Number(currentToken.text));
    }

    if (this.match(TokenType.HEX_NUMBER)) {
      return new ValueExpression(parseInt(currentToken.text, 16));
    }

    if (this.match(TokenType.WORD)) {
      return new ConstantExpression(currentToken.text);
    }

    if (this.match(TokenType.LPAR)) {
      const result: Expression = this.expression();
      this.match(TokenType.RPAR);
      return result;
    }

    if (this.match(TokenType.TEXT)) {
      return new ValueExpression(currentToken.text);
    }

    throw new Error('Неизвестное выражение');
  }

  private get(relativePosition: number): Token {
    const position = this.pos + relativePosition;

    if (position >= this.size) return Parser.EOF;

    return this._tokens[position];
  }

  private consume(type: TokenType): Token {
    const currentToken = this.get(0);

    if (type !== currentToken.type)
      throw new Error(
        `Токен - ${currentToken} не совпадает с типом - ${TokenType}`
      );

    this.pos++;
    return currentToken;
  }

  private match(type: TokenType): boolean {
    const currentToken = this.get(0);

    if (type !== currentToken.type) return false;

    this.pos++;
    return true;
  }
}
