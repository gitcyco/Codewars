; Description:
; 
; Answer:
section .text
global interpret
; void interpret(const char *code, char *output)
; Write the output string to `output`. Don't forget to add a null byte at the end.
interpret:
    ret