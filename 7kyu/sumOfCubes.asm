; 7 kyu Sum of Cubes
; 
; Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
; 
; Assume that the input n will always be a positive integer.
; 
; Examples: (Input --> output)
; 
; 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
; 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
; 
; Answer:
global sumcubes

; <-- RAX sumcubes(DI n) -->
sumcubes:
  xor rax, rax        ; RAX <- the result
  xor rbx, rbx        ; rbx holds the running sum

loop:
  mov rax, rdi          ; copy the current value at rdi to rax
  mul rdi               ; multiply with rdi
  mul rdi               ; multiply with rdi
  add rbx, rax          ; add to our sum
  dec rdi               ; subtract 1 from rdi
  jnz loop              ; loop as long as its not zero

  mov rax, rbx          ; put sum into rax and exit
  ret
    
    