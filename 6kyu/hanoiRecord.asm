; 6 kyu Hanoi record
; 
; The task
; 
; Your task, is to calculate the minimal number of moves to win the game "Towers of Hanoi", with given number of disks.
; What is "Towers of Hanoi"?
; 
; Towers of Hanoi is a simple game consisting of three rods, and a number of disks of different sizes which can slide onto any rod.
; The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.
; 
; The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
; 
;     Only one disk can be moved at a time.
;     Each move consists of taking the upper disk from one of the stacks and placing it on top of another
;     stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
;     No disk may be placed on top of a smaller disk.
; 
; Answer:
; 
;     unsigned long long hanoi(unsigned disks);
;     edi  :=  disks

global hanoi


section .text

hanoi:
    xor   rax,  rax    ; zero out rax, where the answer is placed
    mov   rax,  1      ; start with 1
    mov   rcx,  rdi    ; put input value into rcx, for shl
    shl   rax,  cl     ; shift left by the lower 8 bits in rcx (cl)
    sub   rax,  1      ; subtract 1 for our answer
    ret                ; return with result in rax
