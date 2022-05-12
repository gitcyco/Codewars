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
const rgb = (r, g, b) =>`${hex(r8b(r))}${hex(r8b(g))}${hex(r8b(b))}`.toUpperCase();
const r8b = v => v < 0 ? 0 : v > 255 ? 255 : v;
const hex = v => v.toString(16).padStart(2,0);