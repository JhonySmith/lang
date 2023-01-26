import { TokenType } from './tokenType';

export class Token {
  private _type: TokenType;
  private _text: string;

  constructor(type: TokenType, text: string) {
    this._type = type;
    this._text = text;
  }

  set type(type: TokenType) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  set text(text: string) {
    this._text = text;
  }

  get text() {
    return this._text;
  }
}
