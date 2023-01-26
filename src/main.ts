import { execString } from './exec';
import { Statement } from './parser/ast/statement';
import { Lexer } from './parser/lexer';
import { Parser } from './parser/parser';

export {};

// let lexer = new Lexer(execString);
// let tokens = lexer.tokenize();

// const parser: Parser = new Parser(tokens);

// const statements: Statement[] = parser.parse();

// console.log(statements);

// for (let statement of statements) {
//   statement.execute();
// }
