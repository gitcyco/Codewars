; 8 kyu Invert values
; 
; Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
; 
; invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
; invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
; invert([]) == []
; 
; Answer:
SECTION .text
global invert

invert:
  mov rcx, rsi      ; get length of array and put into counter rcx
  cmp rcx, 0        ; check if the length is zero
  je  exit          ; just exit if so
  
looper:
  neg dword[rdi]    ; negate dword value in rdi
  add rdi, 4        ; increment pointer by 4 bytes to next value in array
  loop looper       ; loop until counter rcx is zero
  
exit:
  ret