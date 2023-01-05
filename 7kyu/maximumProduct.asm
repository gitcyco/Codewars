; 7 kyu Maximum Product
; 
; Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
; Notes
; 
;     Array/list size is at least 2.
; 
;     Array/list numbers could be a mixture of positives, negatives also zeroes .
; 
; Input >> Output Examples
; 
; adjacentElementsProduct([1, 2, 3]); ==> return 6
; 
; Explanation:
; 
;     The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
; 
;     adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
; 
;     Explanation:
; 
; Max product obtained from multiplying 5 * 10  =  50 .
; 
; adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
; 
; Explanation:
; 
;     The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
; 
; Answer:
section .text
global adjacentElementsProduct

; int adjacentElementsProduct(int inputArray[], size_t input_size);
adjacentElementsProduct:
  xor rax, rax                  ; <- return value
  xor r12, r12                  ; r12 will hold our current max value, start at 0
  mov rcx, 0                    ; start counter at 0
  mov r10d, [rdi + rcx * 4]     ; r10d will be 'cur', r11d will be 'next'
  mov r11d, [rdi + rcx * 4]     
  mov eax, r10d                 ; start by multiplying the first and second to get base max
  mul dword[rdi + 1 * 4]
  mov r12d, eax
  
top:
  inc rcx                       ; add 1 to counter
  cmp rcx, rsi                  ; check if we are at the end of the array
  jge exit                      ; if so, exit
  mov r10d, r11d                ; mov next to cur, and get the new next
  mov r11d, [rdi + rcx * 4]
  
  mov eax, r10d                 ; put cur into eax
  mul r11d                      ; multiply with next
  
  cmp eax, r12d                 ; check of eax is greater than our current max value
  jle top                       ; it is not, so jump to top and start again
  mov r12d, eax                 ; else update our current max value
  jmp top
  
  
exit:
  mov eax, r12d                 ; return the max value help in r12d
  ret 
