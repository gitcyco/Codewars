; 7 kyu Triangular Treasure
; 
; Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
; 
; 1st (1)   2nd (3)    3rd (6)
; *          **        ***
;            *         **
;                      *
; 
; You need to return the nth triangular number. You should return 0 for out of range values:
; 
; For example: (Input --> Output)
; 
; 0 --> 0
; 2 --> 3
; 3 --> 6
; -10 --> 0
; 
; Answer:
section .text
global triangular

; int triangular(int n);
; n --> edi, result --> eax
triangular:
    xor rax, rax
    xor rdx, rdx
    cmp edi, 0
    jge calc
    ret
calc:
    mov eax, edi
    mov ebx, edi
    inc ebx
    mul rbx
    mov ecx, 2
    div ecx
    ret