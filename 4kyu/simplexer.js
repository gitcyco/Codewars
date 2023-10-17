// 4 kyu Simplexer
//
// You'll need to implement a simple lexer type. It should take in an input string through the constructor
// (or the parameter, for Javascript), and break it up into typed-tokens
// (in python, C# and Java, you'll have to manage null/None input too, resulting in the same behavior than an empty string).
// You'll need to implement the necessary methods (aaccording to your language) to make the Simplexer object behave
// like an iterator, Meaning that it returns a token (assuming one is available) object each time it a next (Current field in C#) method would be called.
// If no tokens are available, an exception should be thrown (idealy: StopIteration in python, InvalidOperationException in C# and NoSuchElementException in Java).
//
// Tokens are represented by Token objects, which define two properties as strings: text, and type. Constructor is Token(text, type).
//
// C# Notes:
//
// `Iterator` is an extension of `IEnumerator` with default implementations for `Reset()`, `Dispose()` and `IEnumerator.Current`
// as these are not need to pass the challenge. You only need to override `MoveNext()` and `Current { get; }`.
// Token Types
//
// There are 7 tokens types that your lexer will need to produce: identifier, string, integer, boolean, keyword, operator, and whitespace.
// To create the token, you'd need to pass in the token value (the text) and the token type
// as strings, so for example, a simple integer token could be created with new Token("1", "integer")
// (Note: no default values or default constructor are provided, so use new Token("","") if you want a default Token object).
// Token Grammar
//
// Here's a table of the grammars for the various token types:
//
// integer : Any sequence of one or more digits.
//
// boolean : true or false.
//
// string : Any sequence of characters surrounded by "double quotes".
//
// operator : The characters +, -, *, /, %, (, ), and =.
//
// keyword : The following are keywords: if, else, for, while, return, func, and break.
//
// whitespace : Matches standard whitespace characters (space, newline, tab, etc.)
// Consecutive whitespace characters should be matched together.
//
// identifier : Any sequence of alphanumber characters, as well as underscore and dollar sign,
// and which doesn't start with a digit. Make sure that keywords aren't matched as identifiers!
//
// Answer:
class Simplexer {
  constructor(buffer = "") {
    this.buffer = buffer;
    this.tokens = this.#tokenize();
    this.tokens = this.tokens.reverse();
  }
  hasNext() {
    return this.tokens.length > 0;
  }
  next() {
    return this.tokens.pop();
  }
  #tokenize() {
    const tokens = [];
    let cursor = 0;
    while (cursor < this.buffer.length) {
      let char = this.buffer[cursor];

      if (isNum(char)) {
        let num = char;
        while (isNum(this.buffer[++cursor])) {
          num += this.buffer[cursor];
        }
        tokens.push(new Token(num, "integer"));
        continue;
      }
      if (isQuote(char)) {
        let str = char;
        char = this.buffer[++cursor];
        while (!isQuote(char) && cursor < this.buffer.length) {
          char = this.buffer[cursor];
          str += char;
          cursor++;
        }
        tokens.push(new Token(str, "string"));
        continue;
      }
      if (isWhitespace(char)) {
        let str = char;
        char = this.buffer[++cursor];
        while (isWhitespace(char) && cursor < this.buffer.length) {
          char = this.buffer[cursor];
          str += char;
          cursor++;
        }
        tokens.push(new Token(str, "whitespace"));
        continue;
      }
      if (isOperator(char)) {
        tokens.push(new Token(char, "operator"));
        cursor++;
        continue;
      }
      if (/[tf]/i.test(char)) {
        if (isTrue(this.buffer.slice(cursor, cursor + 4))) {
          tokens.push(new Token("true", "boolean"));
          cursor += 4;
          continue;
        }
        if (isFalse(this.buffer.slice(cursor, cursor + 5))) {
          tokens.push(new Token("false", "boolean"));
          cursor += 5;
          continue;
        }
      }
      if (isKeyword(this.buffer.slice(cursor, cursor + 6))) {
        let keyword = this.buffer
          .slice(cursor, cursor + 6)
          .match(/if|else|for|while|return|func|break/i)[0];
        tokens.push(new Token(keyword, "keyword"));
        cursor += keyword.length;
        continue;
      }
      if (/[a-z_$]/i.test(char)) {
        let str = char;
        char = this.buffer[++cursor];
        while (
          !isWhitespace(char) &&
          !isOperator(char) &&
          cursor < this.buffer.length
        ) {
          str += char;
          cursor++;
        }
        tokens.push(new Token(str, "identifier"));
        continue;
      }

      cursor++;
    }
    return tokens;
  }
}

const isOperator = (s) => /[+\-*\/%\(\)=]/.test(s);
const isNum = (s) => /[\d]/.test(s);
const isQuote = (s) => /"/.test(s);
const isWhitespace = (s) => /[\s]/.test(s);
const isTrue = (s) => /true/i.test(s);
const isFalse = (s) => /false/i.test(s);
const isKeyword = (s) => /if|else|for|while|return|func|break/i.test(s);
