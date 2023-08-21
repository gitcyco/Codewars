; 7 kyu Eliminate the intruders! Bit manipulation
; 
; You are given a string representing a number in binary. 
; Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).
; 
; In practice, you should implement this function:
; 
; unsigned long eliminate_unset_bits(const char* number);
; 
; Examples
; 
; eliminate_unset_bits("11010101010101") ->  255 (= 11111111)
; eliminate_unset_bits("111") ->  7
; eliminate_unset_bits("1000000") -> 1
; eliminate_unset_bits("000") -> 0
; 
; Answer:
section .text
global eliminate_unset_bits

; unsigned long eliminate_unset_bits(const char* number (RDI));
eliminate_unset_bits:
    xor rax, rax          ; return value in RAX
    mov rbx, rdi          ; address of string in RDI
    mov rcx,0             ; initialize our counter
    count:
        cmp byte[rbx], 49 ; ascii 48/0 49/1, we want to count the 1's
        jne not_one       ; if its a 0 then skip counting it
        inc rcx           ; else count the 1
    not_one:
        inc rbx           ; move the pointer forward by 1
        cmp byte[rbx],0   ; check if we are at the end of the string
        jnz count         ; if not, continue counting 1's

skip:
    mov rax, 1            ; Start with binary '00000001'
    shl rax, cl           ; our count of 1's is in the rcx, register, use cl to shift left
    sub rax, 1            ; turn '100000000' into '11111111' (subtract one after 2**cl)
    ret