; 8 kyu Convert boolean values to strings 'Yes' or 'No'.
; 
; Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
; 
; Answer:
section .data
    yes: db "Yes",0
    no:  db "No",0
section .text
global bool_to_word

 ; Returns "Yes" if argument is nonzero, "No" if argument is 0
bool_to_word:
  xor rax,rax
  mov rax, rdi
  cmp rax, 0
  jnz retYes
  jz  retNo
  
retYes:
  mov rax, yes
  ret
retNo:
  mov rax, no
  ret
