export const KEYWORDS = ['this'];
export const UNARY_OPERATORS = ['+', '-', '!'];
export const BINARY_OPERATORS = [
  '+',
  '-',
  '*',
  '/',
  '%',
  '^',
  '==',
  '!=',
  '>',
  '<',
  '>=',
  '<=',
  '||',
  '&&',
  '&',
  '===',
  '!==',
  '|'
];

export const PRECEDENCE = {
  '!': 0,
  ':': 0,
  ',': 0,
  ')': 0,
  ']': 0,
  '}': 0,
  '?': 1,
  '||': 2,
  '&&': 3,
  '|': 4,
  '^': 5,
  '&': 6,

  // equality
  '!=': 7,
  '==': 7,
  '!==': 7,
  '===': 7,

  // relational
  '>=': 8,
  '>': 8,
  '<=': 8,
  '<': 8,

  // additive
  '+': 9,
  '-': 9,

  // multiplicative
  '%': 10,
  '/': 10,
  '*': 10,

  // postfix
  '(': 11,
  '[': 11,
  '.': 11,
  '{': 11,  // not sure this is correct
};

export enum Kind {
  STRING = 1,
  IDENTIFIER = 2,
  DOT = 3,
  COMMA = 4,
  COLON = 5,
  INTEGER = 6,
  DECIMAL = 7,
  OPERATOR = 8,
  GROUPER = 9,
  KEYWORD = 10,
}

export const POSTFIX_PRECEDENCE = 11;