// 4 kyu Human readable duration format
//
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
//
// The function must accept a non-negative integer. If it is zero, it just returns "now".
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//
// It is much easier to understand with an example:
//
// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
//
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
//
// Note that spaces are important.
// Detailed rules
//
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive
// integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
//
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
//
// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
//
// A unit of time must be used "as much as possible". It means that the function should not
// return 61 seconds, but 1 minute and 1 second instead.
// Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
//
// Answer:
#include <string>
#include <cstring>
#include <cmath>

std::string format_duration(int secs)
{
  char out[255] = "";
  char tmp[255] = "";
  if (secs == 0)
  {
    strcat(out, "now");
    return out;
  }
  int count = 0;
  int units[5];
  units[4] = secs;

  units[0] = (int)floor(units[4] / 31536000);
  units[4] -= units[0] * 31536000;
  units[1] = (int)floor(units[4] / 86400) % 365;
  units[4] -= units[1] * 86400;
  units[2] = (int)floor(units[4] / 3600) % 24;
  units[4] -= units[2] * 3600;
  units[3] = (int)floor(units[4] / 60) % 60;
  units[4] -= units[3] * 60;

  for (int i = 0; i < 5; i++)
  {
    if (units[i] != 0)
      count++;
  }
  for (int i = 0; i < 5; i++)
  {
    if (units[i] > 0)
    {
      switch (i)
      {
      case 0:
        sprintf(tmp, "%d year", units[i]);
        if (units[i] > 0)
          count--;
        if (units[i] > 0)
          strcat(out, tmp);
        if (units[i] > 1)
          strcat(out, "s");
        break;
      case 1:
        sprintf(tmp, "%d day", units[i]);
        if (units[i] > 0)
          count--;
        if (units[i] > 0)
          strcat(out, tmp);
        if (units[i] > 1)
          strcat(out, "s");
        break;
      case 2:
        sprintf(tmp, "%d hour", units[i]);
        if (units[i] > 0)
          count--;
        if (units[i] > 0)
          strcat(out, tmp);
        if (units[i] > 1)
          strcat(out, "s");
        break;
      case 3:
        sprintf(tmp, "%d minute", units[i]);
        if (units[i] > 0)
          count--;
        if (units[i] > 0)
          strcat(out, tmp);
        if (units[i] > 1)
          strcat(out, "s");
        break;
      case 4:
        sprintf(tmp, "%d second", units[i]);
        if (units[i] > 0)
          count--;
        if (units[i] > 0)
          strcat(out, tmp);
        if (units[i] > 1)
          strcat(out, "s");
        break;
      }
      if (count > 1 && units[i] > 0)
        strcat(out, ", ");
      if (count == 1 && units[i] > 0)
        strcat(out, " and ");
    }
  }
  return out;
}