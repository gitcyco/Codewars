// 6 kyu Strings: filter out the Wikipedia reference marks from text
//
// Most of us used to need to make a quick copy of text from Wikipedia, but those reference marks, e.g. [1], sprinkled all over can get quite annoying!
//
// Now you, code warrior, are about to make a difference!
//
// Given a string, remove in-place all reference marks (which have the format [n], where n - is an integer) and return it.
//
// It's important to note, however, that these marks do not nest - thus you should not worry about the cases with nested marks, e.g. [[1]].
//
// Reference marks do stack, though, e.g. [1][2][3].
//
// It is also guaranteed that there will be no marks with non-digits between the brackets.
// Example:
//
// Given a source string: "Caesar is considered by many historians to be one of the greatest military commanders in history.[4]",
// your function should return: "Caesar is considered by many historians to be one of the greatest military commanders in history."
// Addendum:
//
//     Please keep in mind, that these marks can theoretically appear anywhere within the source string.
//     Remove the marks only. No whitespace stripping or any other form of the source string mutation is required.
//
//
// Answer:
#include <stdio.h>

char *filterRefsOut(char *source)
{
  // mutate `source` in-place and return it:
  size_t len = strlen(source);
  size_t i = 0;

  while (i < len)
  {
    if (source[i] == '[')
    {
      size_t start = i;
      size_t end = 0;
      size_t tmp = i;
      while (tmp < len)
      {
        if (source[tmp] == ']')
        {
          end = tmp;
          break;
        }
        tmp++;
      }
      if (end > start)
      {
        size_t del = end - start + 1;
        tmp = start;
        while (tmp < len)
        {
          if (tmp + del > len)
            source[tmp] = source[len];
          else
          {
            source[tmp] = source[tmp + del];
          }
          tmp++;
        }
        i = start - 1;
      }
    }
    i++;
  }
  return source;
}