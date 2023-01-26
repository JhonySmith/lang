export function isNumber(symbol: any): symbol is number {
  let charCode = String(symbol).charCodeAt(0);

  return charCode >= 48 && charCode <= 57;
}
