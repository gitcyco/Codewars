      *> 8 kyu Grasshopper - Summation
      *> 
      *> Summation
      *> 
      *> Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
      *> 
      *> For example (Input -> Output):
      *> 
      *> 2 -> 3 (1 + 2)
      *> 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
      *> 
      *> Answer:
       identification division.
       program-id. summation.
       data division.
       linkage section.
       01  num          pic 9(4).
       01  result       pic 9(8).
       procedure division using num result.
         ADD 1 TO num GIVING result.
         MULTIPLY num BY result GIVING result.
         DIVIDE result BY 2 GIVING result.
       end program summation.
