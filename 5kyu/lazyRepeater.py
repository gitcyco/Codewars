# 5 kyu Lazy Repeater
# 
# The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument.
# It returns a function. The function it returns will return successive characters of the string on successive invocations.
# It will start back at the beginning of the string once it reaches the end.
# 
# For example:
# 
# var abc = makeLooper('abc');
# abc(); // should return 'a' on this first call
# abc(); // should return 'b' on this second call
# abc(); // should return 'c' on this third call
# abc(); // should return 'a' again on this fourth call
# 
# Different loopers should not affect each other, so be wary of unmanaged global state.
# 
# Answer:
def make_looper(string):
    idx = 0
    def out():
        nonlocal idx
        c = string[idx]
        idx = (idx + 1) % len(string)
        return c
    return out
