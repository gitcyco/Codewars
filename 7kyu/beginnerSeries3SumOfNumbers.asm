; 7 kyu Beginner Series #3 Sum of Numbers
; 
; Given two integers a and b, which can be positive or negative, find the sum of all the integers 
; between and including them and return it. If the two numbers are equal return a or b.
; 
; Note: a and b are not ordered!
; Examples (a, b) --> output (explanation)
; 
; (1, 0) --> 1 (1 + 0 = 1)
; (1, 2) --> 3 (1 + 2 = 3)
; (0, 1) --> 1 (0 + 1 = 1)
; (1, 1) --> 1 (1 since both are same)
; (-1, 0) --> -1 (-1 + 0 = -1)
; (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
; 
; Answer:
global get_sum

section .text

; <--- int get_sum(int a, int b) --->
get_sum:
    xor rax, rax       ; EAX <- the result
    mov r10, 0
    mov r8, rdi        ; r8 will be the lower number
    mov r9, rsi        ; r9 will be the higher number
    cmp r8d, r9d
    jl  skip
    xchg r8, r9        ; swap them so that r8 < r9
    
skip:
    cmp r8d, r9d
    jg  end
    add r10d, r8d
    add r8d, 1
    jmp skip

end:
    mov rax, r10
    ret
; -----> endof get_sum <-----