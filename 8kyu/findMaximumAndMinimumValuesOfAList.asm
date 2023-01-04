; 8 kyu Find Maximum and Minimum Values of a List
; 
; Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
; that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
; Examples (Input -> Output)
; 
; * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
; * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
; * [42, 54, 65, 87, 0]             -> min = 0, max = 87
; * [5]                             -> min = 5, max = 5
; 
; Notes
; 
;     You may consider that there will not be any empty arrays/vectors.
; 
; Answer:
section .text
global min, max

; int min(int* array [rdi], int arrayLength [esi]); --> [eax]
min:
  mov eax, [rdi]              ; put first value into eax
  xor rcx, rcx                ; zero out rcx
  mov rcx, -1                 ; start counter at -1

lmin:
  inc rcx                     ; add 1 to counter
  cmp rcx, rsi                ; check if we are at the end of the array
  jge emin                    ; if so, exit
  cmp eax, [rdi + rcx * 4]    ; compare current value in eax with the next item
  jl  lmin                    ; if eax is lower, loop
  mov eax, [rdi + rcx * 4]    ; else we update eax with current minimum
  jmp lmin                    ; loop

emin:
  ret                         ; exit routine

; int max(int* array [rdi], int arrayLength [esi]); --> [eax]
max:
  mov eax, [rdi]              ; (same as above except check for max value)
  xor rcx, rcx
  mov rcx, -1

lmax:
  inc rcx
  cmp rcx, rsi
  jge emax
  cmp eax, [rdi + rcx * 4]
  jg  lmax
  mov eax, [rdi + rcx * 4]
  jmp lmax

emax:
  ret