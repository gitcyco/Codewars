// 8 kyu Return Two Highest Values in List
//
// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
//
// The result should also be ordered from highest to lowest.
//
// Examples:
//
// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []
//
// Answer:
#include <stddef.h>
#include <limits.h>

size_t two_highest(size_t length, const long long array[length], long long result[2])
{
  if (length == 0)
    return 0;
  result[0] = LONG_MIN;
  int count = 0;
  for (size_t i = 0; i < length; i++)
  {
    if (array[i] > result[0])
    {
      result[1] = result[0];
      result[0] = array[i];
      count++;
    }
    else if (array[i] >= result[1] && array[i] < result[0])
    {
      result[1] = array[i];
      count++;
    }
  }
  return count > 1 ? 2 : 1;
}