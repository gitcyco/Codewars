; 8 kyu Quarter of the year
; 
; Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
; 
; For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
; 
; Answer:
section .text
global quarter_of
quarter_of:     ; int quarter_of(int month)
  xor eax, eax  ; Your code here
  cmp edi, 3
  jle first
  cmp edi, 6
  jle second
  cmp edi, 9
  jle third
  cmp edi, 12
  jle fourth
  ret
  
first:
  mov eax, 1
  ret
second:
  mov eax, 2
  ret
third:
  mov eax, 3
  ret
fourth:
  mov eax, 4
  ret