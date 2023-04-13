; 7 kyu Power of two
; 
; Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) 
; that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
; 
;     a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
; 
; You may assume the input is always valid.
; Examples
; 
; mov edi, 0
; call power_of_two    ; returns false (zero)
; mov edi, 16
; call power_of_two    ; returns true (non-zero)
; mov edi, 100
; call power_of_two    ; returns false
; mov edi, 1024
; call power_of_two    ; returns true
; mov edi, 20000
; call power_of_two    ; returns false
; 
; Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
; 
; Answer:
section .text
global power_of_two

; bool power_of_two(const unsigned int x (edi))
power_of_two:
  xor eax, eax ; return value
  cmp edi, 0
  jne nz
  ret
nz:
  mov r11d, edi
  sub r11d, 1
  and edi, r11d
  jnz skip
  mov eax, 1
skip:
  ret