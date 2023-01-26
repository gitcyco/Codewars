# 5 kyu Esolang Interpreters #2 - Custom Smallfuck Interpreter
# 
# The Task
# 
# Implement a custom Smallfuck interpreter interpreter() (interpreter in Haskell and F#, Interpreter in C#, custom_small_fuck:interpreter/2 in Erlang) 
# which accepts the following arguments:
# 
#     code - Required. The Smallfuck program to be executed, passed in as a string. May contain non-command characters. 
#            Your interpreter should simply ignore any non-command characters.
#     tape - Required. The initial state of the data storage (tape), passed in as a string. 
#            For example, if the string "00101100" is passed in then it should translate to something of this form within 
#            your interpreter: [0, 0, 1, 0, 1, 1, 0, 0]. You may assume that all input strings for tape will be non-empty and will only contain "0"s and "1"s.
# 
# Your interpreter should return the final state of the data storage (tape) as a string in the same format that it was passed in. 
# For example, if the tape in your interpreter ends up being [1, 1, 1, 1, 1] then return the string "11111".
# 
# NOTE: The pointer of the interpreter always starts from the first (leftmost) cell of the tape, same as in Brainfuck.
# 
# Answer:
import re

def interpreter(code, tape):
    code = re.sub(r"[^\[\]\*\<\>]", "", code)
    codePtr = 0
    memPtr = 0
    code = list(code)
    tape = list(map(int, tape))
    stack = []
    
    while not (memPtr < 0 or memPtr > len(tape) - 1 or codePtr > len(code) - 1):
        if code[codePtr] == '>': memPtr += 1
        elif code[codePtr] == '<': memPtr -= 1
        elif code[codePtr] == '*': tape[memPtr] ^= 1
        elif code[codePtr] == '[': 
            if tape[memPtr] == 1: stack.append(codePtr)
            else:
                counter = 0
                while True:
                    codePtr += 1
                    if not code[codePtr]: break
                    if code[codePtr] == '[': counter += 1
                    elif code[codePtr] == ']':
                        if counter > 0: counter -= 1
                        else: break
        elif code[codePtr] == ']': codePtr = stack.pop() - 1
        codePtr += 1
    
    return ''.join(str(e) for e in tape)