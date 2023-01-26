export enum TokenType {
  NUMBER = 'NUMBER',
  HEX_NUMBER = 'HEX_NUMBER',
  WORD = 'WORD',
  TEXT = 'TEXT',

  //keywords
  PRINT = 'PRINT',
  IF = 'IF',
  ELSE = 'ELSE',

  PLUS = 'PLUS', // +
  MINUS = 'MINUS', // -
  STAR = 'STAR', // *
  SLASH = 'SLASH', // /
  EQ = 'EQ', // =
  EQEQ = 'EQEQ', // ==
  EXCL = 'EXCL', // !
  EXCLEQ = 'EXCLEQ', // !=

  LT = 'LT', // <
  LTEQ = 'LTEQ', // <=
  GT = 'GT', // >
  GTEQ = 'GTEQ', // >=

  BAR = 'BAR', // |
  BARBAR = 'BARBAR', // ||
  AMP = 'AMP', // &
  AMPAMP = 'AMPAMP', // &&

  LPAR = 'LPAR', // (
  RPAR = 'RPAR', // )

  EOF = 'EOF',
}
