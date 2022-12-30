; 8 kyu Switch it Up!
; 
; When provided with a number between 0-9, return it in words.
; 
; Input :: 1
; 
; Output :: "One".
; 
; If your language supports it, try using a switch statement.
; 
; Answer:
SECTION .data
  zero db "Zero",0
  one db "One",0
  two db "Two",0
  three db "Three",0
  four db "Four",0
  five db "Five",0
  six db "Six",0
  seven db "Seven",0
  eight db "Eight",0
  nine db "Nine",0

SECTION .text
global switch_it_up

switch_it_up:
;   mov eax, one
  mov r9d, edi
  mov eax, zero
  cmp r9d, 0
  je .end
  mov eax, one
  cmp r9d, 1
  je .end
  mov eax, two
  cmp r9d, 2
  je .end
  mov eax, three
  cmp r9d, 3
  je .end
  mov eax, four
  cmp r9d, 4
  je .end
  mov eax, five
  cmp r9d, 5
  je .end
  mov eax, six
  cmp r9d, 6
  je .end
  mov eax, seven
  cmp r9d, 7
  je .end
  mov eax, eight
  cmp r9d, 8
  je .end
  mov eax, nine

.end
  ret


; Alternate method, shorter, using array and pointers, and not a "switch like" syntax
; 
; SECTION .rodata
; zero: db "Zero", 0
; one: db "One", 0
; two: db "Two", 0
; three: db "Three", 0
; four: db "Four", 0
; five: db "Five", 0
; six: db "Six", 0
; seven: db "Seven", 0
; eight: db "Eight", 0
; nine: db "Nine", 0
; ten: db "Ten", 0
; 
; number_arr: dq zero, one, two, three, four, five, six, seven, eight, nine, ten
; 
; SECTION .text
; global switch_it_up
; 
; switch_it_up:
;   mov rax, [number_arr + rdi * 8]
;   ret