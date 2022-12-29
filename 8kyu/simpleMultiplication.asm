; 8 kyu Simple multiplication
; 
; This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
; 
; Answer:
SECTION .text
global simple_multiplication

; Multiplies and returns the argument by 8 if the argument is even, else 9 if the argument is odd.
; arg0         = (int64_t) The argument to multiply.
; return value = (int64_t) The result.
simple_multiplication:
  mov eax, edi
  test al, 1
  jnz odd_fn
  jz  even_fn
  ret
  
even_fn:
  mov edx, 0x8
  mul edx
  ret
  
odd_fn:
  mov edx, 0x9
  mul edx
  ret
