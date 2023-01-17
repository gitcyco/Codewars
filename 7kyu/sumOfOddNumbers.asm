; 7 kyu Sum of odd numbers
; 
; Given the triangle of consecutive odd numbers:
; 
;              1
;           3     5
;        7     9    11
;    13    15    17    19
; 21    23    25    27    29
; ...
; 
; Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
; 
; 1 -->  1
; 2 --> 3 + 5 = 8
; 
; Answer:
global row_odd_sum_numbers

section .text

; <----- unsigned long long row_odd_sum_numbers(unsigned n) ----->
row_odd_sum_numbers:
  mov rax, rdi
  mul rdi
  mul rdi
  ret
; ---------> end of roddsum <---------