# 6 kyu Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck)
# 
# The Task
# 
# Time to write your first Esolang interpreter :D
# 
# Your task is to implement a MiniStringFuck interpreter myFirstInterpreter()/my_first_interpreter()/Interpreter()/interpret() MyFirstInterpreter() (depending on your language) 
# which accepts exactly 1 required argument code/$code/strng which is the MiniStringFuck program to be executed. 
# The output of the program should then be returned by your interpreter as a string.
# 
# Since this is the first time you are about to write an interpreter for an Esolang, here are a few quick tips:
# 
#     If you are afraid that your interpreter will be confused by non-command characters appearing in the MiniStringFuck 
#     program, you can try to remove all non-command characters from the code input before letting your interpreter interpret it
#     The memory cell in MiniStringFuck only ever contains a single integer value - think of how it can be modelled in your interpreter
#     If you are stuck as to how to interpret the string as a program, try thinking of strings as an array of characters. 
#     Try looping through the "program" like you would an array
#     Writing an interpreter for an Esolang can sometimes be quite confusing! 
#     It never hurts to add a few comments in your interpreter as you implement it to remind yourself of what is happening within the interpreter at every stage
# 
# NOTE: If you would not like to name your interpreter as myFirstInterpreter()/my_first_interpreter(), you can optionally rename it to either 
# miniStringFuck()/mini_string_fuck() or interpreter() instead - the test cases will handle the rest for you. 
# Not available in Java, Go, Swift, TypeScript, Haskell, Elixir, C++, C#, Rust, R, Erlang, F#, COBOL and NASM; irrelevant to Brainfuck solvers ;)
# 
# Answer:
def my_first_interpreter(code):
    out = ""
    reg = 0
    for c in code:
        if c == '+':
            reg = (reg + 1) % 256
        if c == '.':
            out += chr(reg)
    return out