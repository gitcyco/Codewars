# 6 kyu Make the Deadfish Swim
# 
# Write a simple parser that will parse and run Deadfish.
# 
# Deadfish has 4 commands, each 1 character long:
# 
#     i increments the value (initially 0)
#     d decrements the value
#     s squares the value
#     o outputs the value into the return array
# 
# Invalid characters should be ignored.
# 
# parse("iiisdoso") => [ 8, 64 ]
# 
# Answer:
def parse(data):
    tape = []
    mem = 0
    for c in data:
        match c:
            case "i":
                mem += 1
            case "d":
                mem -= 1
            case "s":
                mem *= mem
            case "o":
                tape.append(mem)
    return tape