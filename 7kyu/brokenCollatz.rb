# 7 kyu Broken Collatz
# 
# The Collatz sequence is a set of numbers formed by taking an arbitrary positive integer and applying
# an operation to it: if the number is even, divide it by two, and if it's odd, multiply by three and add one.
# Repeat this process, taking the result as the input for the next step, until the resulting number is one.
# 
# The following function is not working. It's purpose is to return the length of any Collatz sequence. Can you fix it?
# 
# Answer:
def collatz(n, count = 1)
  if n == 1
    return count
  end
  if n % 2 == 0
    n = n / 2
  else
    n = n * 3 + 1
  end
  return collatz(n, count + 1)
end