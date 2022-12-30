; 8 kyu Return Negative
; 
; In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
; Examples
; 
; make_negative(1);    // return -1
; make_negative(-5);   // return -5
; make_negative(0);    // return 0
; 
; Notes
; 
;     The number can be negative already, in which case no change is required.
;     Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
; 
; Answer:
SECTION .text
global make_negative

make_negative:
  cmp edi, 0
  jle exit
  neg edi
exit:
  mov eax, edi
  ret