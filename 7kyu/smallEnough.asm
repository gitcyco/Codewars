; 7 kyu Small enough? - Beginner
; 
; You will be given an array and a limit value. 
; You must check that all values in the array are below or equal to the limit value. 
; If they are, return true. Else, return false.
; 
; You can assume all values in the array are numbers.

; Answer:
SECTION .text
global small_enough

small_enough:
  xor rcx, rcx                ; zero out rcx
  mov rcx, -1                 ; start counter at -1

top:
  inc rcx                     ; add 1 to counter
  cmp rcx, rsi                ; check if we are at the end of the array
  jge exit                    ; if so, exit
  cmp [rdi + rcx * 4], edx    ; compare max value in edx with the next item
  jle top                     ; if array item is lower or equal, loop
  mov eax, 0                  ; else we return 0 (false)
  ret                         ; exit routine
  
exit:
  mov eax, 1                  ; all items pass, so return 1 (true)
  ret 