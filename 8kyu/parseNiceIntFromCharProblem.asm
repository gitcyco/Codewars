; 8 kyu Parse nice int from char problem
; 
; You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
; 
; Write a program that returns the girl's age (0-9) as an integer.
; 
; Assume the test input string is always a valid string. 
; For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
; 
; Answer:
global get_age

section .text

; <--- unsigned int get_age(const char *inp) --->
get_age:
    xor rax, rax       ; EAX <- the result
    xor r10, r10
    mov r10b, byte[rdi]
    sub r10b, 48
    mov al, r10b
    ret
; ---------> endof get_age <---------