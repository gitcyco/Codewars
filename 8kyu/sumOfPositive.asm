; 8 kyu Sum of positive
; 
; You get an array of numbers, return the sum of all of the positives ones.
; 
; Example [1,-4,7,12] => 1 + 7 + 12 = 20
; 
; Note: if there is nothing to sum, the sum is default to 0.
; 
; Answer: 
SECTION .text
global positive_sum

positive_sum:
  xor rax, rax
  
  mov rcx, rsi
  mov rbx, rdi
  cmp rcx, 0
  je  exit

looper:
  mov rdx, [rbx]
;   test edx,edx
  cmp edx, 0
  js  skip
  add eax, edx
  
skip:
  add rbx, 4
  loop looper

exit:
  ret