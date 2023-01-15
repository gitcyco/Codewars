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
object TimeFormatter {

  fun formatDuration(seconds: Int): String {
      if(seconds == 0) return "now";
      var output = ArrayList<String>();
      var years: Int = Math.floor(seconds.toDouble() / 31536000).toInt();
      var secs: Int = seconds - (years * 31536000);
      if(years > 0) {
          if(years == 1) {
              output.add(years.toString() + " year");
          } else {
              output.add(years.toString() + " years");
          }
      }
      var days: Int = Math.floor(secs.toDouble() / 86400).toInt() % 365;
      secs -= days * 86400;
      if(days > 0) {
          if(days == 1) {
              output.add(days.toString() + " day");
          } else {
              output.add(days.toString() + " days");
          }
      }
      var hours: Int = Math.floor(secs.toDouble() / 3600).toInt() % 24;
      secs -= hours * 3600;
      if(hours > 0) {
          if(hours == 1) {
              output.add(hours.toString() + " hour");
          } else {
              output.add(hours.toString() + " hours");
          }
      }
      var minutes: Int = Math.floor(secs.toDouble() / 60).toInt() % 60;
      secs -= minutes * 60;
      if(minutes > 0) {
          if(minutes == 1) {
              output.add(minutes.toString() + " minute");
          } else {
              output.add(minutes.toString() + " minutes");
          }
      }
      if(secs > 0) {
          if(secs == 1) {
              output.add(secs.toString() + " second");
          } else {
              output.add(secs.toString() + " seconds");
          }
      }
      var len = output.size;
      var str = "";
      for (i in output.indices) {
          if(i < len - 2) {
              str += output[i] + ", ";
          } else if (i < len - 1) {
              str += output[i] + " and ";
          } else {
              str += output[i];
          }
      }
      return str;
  }
}