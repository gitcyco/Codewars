; 8 kyu Even or Odd
; Description:
; 
; Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
; 
; Answer:
global even_or_odd
section .bss
    ans resb 4
section .text
; input: edi = number
; output: rax
; callee saved registers: rbx, rsp, rbp, r12-r15
even_or_odd:
  mov eax, ans
  mov dword [eax], 'Odd'
  mov eax, edi
  and eax, 1
  cmp eax, 0
  je even_fn
  mov rax, ans
  ret
even_fn:
  mov eax, ans
  mov dword [eax], 'Even'
  ret