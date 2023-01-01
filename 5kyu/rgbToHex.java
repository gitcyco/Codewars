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
public class RgbToHex {
    public static int fix(int n) {
      if(n < 0) n = 0;
      if(n > 255) n = 255;
      return n;
    }
    public static String rgb(int r, int g, int b) {
        return String.format("%02X%02X%02X", fix(r), fix(g), fix(b));
    }
}