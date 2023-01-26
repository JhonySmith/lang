import { TokenType } from './tokenType';
import { isNumber } from '../helpers/checkers';
import { symbolRegExp } from '../helpers/regExp';
import { Token } from './token';

export class Lexer {
  private static OPERATOR_TOKENS: TokenType[] = [
    TokenType.PLUS,
    TokenType.MINUS,
    TokenType.STAR,
    TokenType.SLASH,
    TokenType.LPAR,
    TokenType.RPAR,
    TokenType.EQ,
    TokenType.LT,
    TokenType.GT,
  ];
  private static OPERATOR_CHARS: string = '+-*/()=<>';

  private static OPERATORS: Map<string, TokenType>;

  static {
    this.OPERATORS = new Map();
    this.OPERATORS.set('+', TokenType.PLUS);
    this.OPERATORS.set('-', TokenType.MINUS);
    this.OPERATORS.set('*', TokenType.STAR);
    this.OPERATORS.set('/', TokenType.SLASH);
    this.OPERATORS.set('(', TokenType.LPAR);
    this.OPERATORS.set(')', TokenType.RPAR);
    this.OPERATORS.set('=', TokenType.EQ);
    this.OPERATORS.set('>', TokenType.GT);
    this.OPERATORS.set('<', TokenType.LT);

    this.OPERATORS.set('!', TokenType.EXCL);
    this.OPERATORS.set('&', TokenType.AMP);
    this.OPERATORS.set('|', TokenType.BAR);

    this.OPERATORS.set('==', TokenType.EQEQ);
    this.OPERATORS.set('!=', TokenType.EXCLEQ);
    this.OPERATORS.set('<=', TokenType.LTEQ);
    this.OPERATORS.set('>=', TokenType.GTEQ);

    this.OPERATORS.set('&&', TokenType.AMPAMP);
    this.OPERATORS.set('||', TokenType.BARBAR);
  }

  private _input: string;
  private tokens: Token[] = [];
  private length: number;

  private pos: number = 0;

  constructor(input: string) {
    this._input = input;
    this.length = input.length;
  }

  tokenize(): Token[] {
    while (this.pos < this.length) {
      let currentSymbol = this.peek(0);

      if (isNumber(currentSymbol)) {
        this.tokenizeNumber();
      } else if (symbolRegExp.test(currentSymbol)) {
        this.tokenizeWord();
      } else if (currentSymbol === '#') {
        this.next();
        this.tokenizeHexNumber();
      } else if (currentSymbol === '"') {
        this.tokenizeText();
      } else if (Lexer.OPERATOR_CHARS.includes(currentSymbol)) {
        this.tokenizeOperator();
      } else {
        this.next();
      }
    }

    return this.tokens;
  }

  tokenizeNumber() {
    let buffer: string = '';
    let currentSymbol = this.peek(0);

    while (true) {
      if (currentSymbol === '.') {
        if (buffer.includes('.')) {
          throw new Error('Неправильно составлено выражение');
        }
      } else if (!isNumber(currentSymbol)) {
        break;
      }

      buffer += currentSymbol;
      currentSymbol = this.next();
    }

    this.addToken(TokenType.NUMBER, buffer);
  }

  tokenizeHexNumber() {
    let buffer: string = '';
    let currentSymbol = this.peek(0);

    while (
      isNumber(currentSymbol) ||
      'abcdef'.includes(currentSymbol.toLocaleLowerCase())
    ) {
      buffer += currentSymbol;
      currentSymbol = this.next();
    }

    this.addToken(TokenType.HEX_NUMBER, buffer);
  }

  tokenizeOperator() {
    let currentSymbol = this.peek(0);

    if (currentSymbol === '/') {
      if (this.peek(1) === '/') {
        this.next();
        this.next();

        this.tokenizeComment();
        return;
      } else if (this.peek(1) === '*') {
        this.tokenizeMultiLineComment();
        return;
      }
    }

    let buffer: string = '';

    while (true) {
      let text: string = buffer;
      if (!Lexer.OPERATORS.has(text + currentSymbol) && text !== '') {
        const tokenType = Lexer.OPERATORS.get(text);
        if (tokenType) this.addToken(tokenType);
        else throw new Error('Неизвестный токен');
        return;
      }

      buffer += currentSymbol;
      currentSymbol = this.next();
    }
  }

  private tokenizeWord(): void {
    let buffer: string = '';
    let currentSymbol = this.peek(0);

    while (true) {
      if (!symbolRegExp.test(currentSymbol) && !isNumber(currentSymbol)) {
        break;
      }

      buffer += currentSymbol;
      currentSymbol = this.next();
    }

    const resultBuffer = buffer.toLocaleUpperCase();

    switch (resultBuffer) {
      case 'PRINT':
        this.addToken(TokenType.PRINT);
        break;
      case 'IF':
        this.addToken(TokenType.IF);
        break;
      case 'ELSE':
        this.addToken(TokenType.ELSE);
        break;
      default:
        this.addToken(TokenType.WORD, buffer);
    }
  }

  private tokenizeText(): void {
    this.next();
    let buffer: string = '';
    let currentSymbol = this.peek(0);

    while (true) {
      if (currentSymbol === '"') {
        break;
      }

      buffer += currentSymbol;
      currentSymbol = this.next();
    }

    this.next();

    this.addToken(TokenType.TEXT, buffer);
  }

  private tokenizeComment() {
    let currentSymbol: string = this.peek(0);

    while (!'\r\n\0'.includes(currentSymbol)) {
      currentSymbol = this.next();
    }
  }

  private tokenizeMultiLineComment() {
    let currentSymbol: string = this.peek(0);

    while (true) {
      if (currentSymbol === '*' && this.peek(1) === '/') {
        break;
      }
      if (currentSymbol === '/0') throw new Error('Комментариц не закрыт');
      currentSymbol = this.next();
    }

    this.next();
    this.next();
  }

  private next(): string {
    this.pos++;
    return this.peek(0);
  }

  private peek(relativePosition: number): string {
    const position = this.pos + relativePosition;

    if (position >= this.length) return '\0';

    return this._input[position];
  }

  addToken(type: TokenType, text?: string): void {
    if (text !== undefined) {
      this.tokens.push(new Token(type, text));
    } else {
      this.addToken(type, '');
    }
  }
}
