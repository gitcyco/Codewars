; 6 kyu Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck)
; 
; The Task
; 
; Time to write your first Esolang interpreter :D
; 
; Your task is to implement a MiniStringFuck interpreter myFirstInterpreter()/my_first_interpreter()/Interpreter()/interpret() MyFirstInterpreter() (depending on your language)
; which accepts exactly 1 required argument code/$code/strng which is the MiniStringFuck program to be executed.
; The output of the program should then be returned by your interpreter as a string.
; 
; Since this is the first time you are about to write an interpreter for an Esolang, here are a few quick tips:
; 
;     If you are afraid that your interpreter will be confused by non-command characters appearing in the MiniStringFuck
;     program, you can try to remove all non-command characters from the code input before letting your interpreter interpret it
;     The memory cell in MiniStringFuck only ever contains a single integer value - think of how it can be modelled in your interpreter
;     If you are stuck as to how to interpret the string as a program, try thinking of strings as an array of characters.
;     Try looping through the "program" like you would an array
;     Writing an interpreter for an Esolang can sometimes be quite confusing!
;     It never hurts to add a few comments in your interpreter as you implement it to remind yourself of what is happening within the interpreter at every stage
; 
; NOTE: If you would not like to name your interpreter as myFirstInterpreter()/my_first_interpreter(), you can optionally rename it to either
; miniStringFuck()/mini_string_fuck() or interpreter() instead - the test cases will handle the rest for you.
; Not available in Java, Go, Swift, TypeScript, Haskell, Elixir, C++, C#, Rust, R, Erlang, F#, COBOL and NASM; irrelevant to Brainfuck solvers ;)
; 
; Answer:
section .text
global interpret
; void interpret(const char *code, char *output)
; Write the output string to `output`. Don't forget to add a null byte at the end.
interpret:

    mov rbx, rdi                ; *code is in rdi, copy ptr to it into rbx for len function
    call len                    ; get length of *code, result will be in rcx
    
    mov r11, 0                  ; initialize our primary register to 0
    mov r10, rsi                ; *output will be at rsi, save address into r10
    mov rdx, rdi                ; grab clean ptr of *code into rdx

dothis:
    push rcx                    ; save state of rcx, as this will be our loop counter and will be decremented by loop

    mov r8b, [rdx]              ; grab first byte of code
    mov al, r8b                 ; stick first char into rax low byte (al)
    
    cmp al, '+'                 ; check if it is a '+' symbol
    je plus                     ; do plus stuff
    cmp al, '.'                 ; check if it is a '.' symbol
    je dot                      ; do dot stuff
    jmp finish                  ; jump to the end of the loop
    
plus:                           ; plus sub, here we just increment the primary register (r11)
    inc r11b
    jmp finish
dot:                            ; dot sub, here we output the ascii char in the primary register (r11)
    mov dword[r10], r11d
    inc r10
    jmp finish

finish:                         ; and now we increment our code pointer and loop for the next input
    inc rdx
    pop rcx
    loop dothis
    
    mov dword[r10], 0           ; null terminate our output and exit
    ret

len:                            ; len simply loops over the string at rbx and count chars until we hit a 0 terminator
    push rbx
    mov rcx,0
    dec rbx
    count:
        inc rcx
        inc rbx
        cmp byte[rbx],0
        jnz count
    dec rcx
    pop rbx
    ret