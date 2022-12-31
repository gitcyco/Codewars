; 8 kyu Find the smallest integer in the array
; 
; Given an array of integers your solution should find the smallest integer.
; 
; For example:
; 
;     Given [34, 15, 88, 2] your solution will return 2
;     Given [34, -345, -1, 100] your solution will return -345
; 
; You can assume, for the purpose of this kata, that the supplied array will not be empty.
; 
; Answer:
section .text

global find_smallest_int
; int find_smallest_int(int *array, int size)
find_smallest_int:
  xor rax, rax
  
  mov rcx, rsi        ; number of items in array
  mov rax, [rdi]      ; first item in array
  
looper:
  mov rdx, [rdi]
  cmp eax, edx
  jg upd
  jmp skip
  
upd:
  mov rax, rdx
  
skip:
  add rdi, 4
  loop looper
  
  ret