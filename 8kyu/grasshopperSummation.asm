;8 kyu Grasshopper - Summation
;
;Summation
;
;Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
;
;For example (Input -> Output):
;
;2 -> 3 (1 + 2)
;8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
;
; Answer:

section .text
global summation
summation:
  mov eax, edi  ; edi = arg0
  mov ebx, eax
  add ebx, 0x01
  mul ebx
  mov ebx, 2
  div ebx 
  ret           ; return result
  