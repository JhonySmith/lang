import { Value } from 'lang/lib/value';

export interface Expression {
  eval(): Value;
}
