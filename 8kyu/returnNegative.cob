      *8 kyu Return Negative
      *
      *In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
      *Examples
      *
      *make_n gative(1);    // return -1
      *make_n gative(-5);   // return -5
      *make_n gative(0);    // return 0
      *
      *Notes  
      *
      *The number can be negative already, in which case no change is required.
      *Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
      *
      *Answer 
       IDENTIFICATION DIVISION.
       PROGRAM-ID. MAKE-NEGATIVE.
       DATA DIVISION.
       LINKAGE SECTION.
       01 N           PIC S9(8).
       01 RESULT      PIC S9(8).
       PROCEDURE DIVISION USING N RESULT.
       IF N < 0
           MOVE N to RESULT
       ELSE
           SUBTRACT N from ZERO giving RESULT
       END-IF.
       END PROGRAM MAKE-NEGATIVE.
