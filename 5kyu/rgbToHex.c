// 5 kyu RGB To Hex Conversion
// 
// The rgb function is incomplete. 
// Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
// Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.
// 
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// 
// The following are examples of expected output values:
// 
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
// 
// Answer:
#include <stdio.h>

int rgb(int r, int g, int b, char *output)
{
  if(r < 0) r = 0;
  if(r > 255) r = 255;
  if(g < 0) g = 0;
  if(g > 255) g = 255;
  if(b < 0) b = 0;
  if(b > 255) b = 255;

  sprintf(output, "%02X%02X%02X", r,g,b);

  return 0; 
}