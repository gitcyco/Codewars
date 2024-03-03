// 4 kyu Complex CSV Parser
//
// We need valid CSV parser!
//
// A CSV (Comma-Separated Values) file is a file that represents tabular data in a simple, text-only manner.
// At its simplest, a CSV file contains rows of data separated by newlines, and each field is separated by commas.
//
// This parser needs to not only handle CSVs using commas to delimit fields, but it also needs
// to handle complex field values (which may be wrapped in quotes, and may span multiple lines), and also different
// delimiters and quote characters.
//
// Examples
//
// A simple CSV would look like this:
//
// a,b,c
// d,e,f
//
// which should parse to:
//
// [['a', 'b', 'c'], ['d', 'e', 'f']
//
// While a more complex one might be:
//
// one,"two wraps
// onto ""two"" lines",three
// 4,,6
//
// that becomes
//
// [['one', 'two wraps\nonto "two" lines', 'three'], ['4', '', '6']]
//
// Specification:
// Basics
//
//     The parser should return an array of arrays, one array for each row of the CSV file (not necessarily each line of text!).
//     Rows are delimited by the newline character ("\n").
//     Each row is divided by a separator character, by default the comma (,).
//     All characters between separators are part of the value — do not trim the field value.
//     Fields are assumed to be strings — don't convert them to numbers or other types in this kata.
//     Empty fields are valid — don't discard empty values at the beginning, middle or end of a row. These should be included as an empty string.
//     Likewise, an empty row is still valid, and effectively contains a single empty field.
//     For this kata, expect uneven rows. Just include the actual fields in each row, even if the rows have a different number of fields.
//
// Quoted Fields
//
//     The parser should handle quoted fields.
//     A quoted field starts and ends with the same character, and every character
//     in between makes up the field value, including separator characters.
//     The default quote character is a double quote (").
//     Quoted fields may span multiple lines — don't assume a newline means a new row!
//     Quoted fields only start immediately following a separator character, newline, or start of the file.
//     If a quote character occurs anywhere else, it should be treated as a normal field value.
//     They should be immediately followed by a separator, newline, or the end of the file.
//     If a quote character occurs within a quoted field, it is simply doubled.
//     For example, the value foo "bar" baz will be encoded as "foo ""bar"" baz".
//     The parser should identify and unescape these values.
//     You should check for unclosed quoted fields, and throw an error, but this is not tested here.
//
// Alternate Characters
//
//     The parser should handle alternate characters for the separator and quote.
//     You may safely assume that the values provided are a single character, but bonus points for error checking.
//
// Answer:
/**
 * CSV Parser.  Takes a string as input and returns
 * an array of arrays (for each row).
 *
 * @param input String, CSV input
 * @param separator String, single character used to separate fields.
 *        Defaults to ","
 * @param quote String, single character used to quote non-simple fields.
 *        Defaults to "\"".
 */
function parseCSV(input, separator = ",", quote = '"') {
  const csv = [];
  let row = [];
  let cursor = 0;
  let item = "";
  while (cursor < input.length) {
    if (input[cursor] === quote) {
      cursor++;
      while (cursor < input.length) {
        if (input[cursor] === quote) {
          if (cursor < input.length - 1 && input[cursor + 1] === quote) {
            cursor++;
          } else {
            cursor++;
            row.push(item);
            item = null;
            break;
          }
        }
        item += input[cursor];
        cursor++;
      }
    }
    if (input[cursor] === separator) {
      if (item !== null) row.push(item);
      item = "";
      cursor++;
      continue;
    }
    if (input[cursor] === "\n") {
      if (item !== null) row.push(item);
      csv.push(row);
      row = [];
      item = "";
      cursor++;
      continue;
    }
    if (item !== null) item += input[cursor];
    cursor++;
  }
  if (item !== null) row.push(item);
  csv.push(row);
  return csv;
}
