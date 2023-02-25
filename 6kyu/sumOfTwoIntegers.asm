; 6 kyu Sum of Two Integers
; 
; Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -
; Notes
; 
;     The numbers (a,b) may be positive , negative values or zeros .
; 
;     Returning value will be an integer .
; 
;     Javascript: the Array reduce methods are disabled, along with eval, require, and module .
; 
; Input >> Output Examples
; 
; 1- Add (5,19) ==> return (24)
; 
; 2- Add (-27,18) ==> return (-9)
; 
; 3- Add (-14,-16) ==> return (-30)
; 
; Answer:
section .text
global sum
sum:            ; int sum(int x, int y)
                ; input:  rdi = x, rsi = y
                ; output: rax
  xor rax, rax  ; Do your magic!
loop:
  mov rdx, rdi
  and rdx, rsi
  xor rdi, rsi
  shl rdx, 1
  mov rsi, rdx
  jnz loop
  
exit:
  mov rax, rdi
  ret
  