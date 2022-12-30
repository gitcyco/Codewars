// 7 kyu Beginner Series #3 Sum of Numbers
// 
// Given two integers a and b, which can be positive or negative, find the sum of all the integers 
// between and including them and return it. If the two numbers are equal return a or b.
// 
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// 
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// 
// Answer:
int get_sum(int a , int b) {
  int s,e,c=0;
  if(a > b) {
    s = b;
    e = a;
  } else {
    s = a;
    e = b;
  }
  for(int i = s; i <= e; i++) {
    c += i;
  }
  return c;
}