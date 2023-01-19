      *8 kyu Simple multiplication
      *
      *This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
      *Answer:
       IDENTIFICATION DIVISION.
       PROGRAM-ID. SIMPLE-MULTIPLICATION.
       DATA DIVISION.
       LINKAGE SECTION.
       01 N           PIC 9(7).
       01 RESULT      PIC 9(8).
       PROCEDURE DIVISION USING N RESULT.
          IF FUNCTION MOD(N,2) = 0 THEN
            MULTIPLY N BY 8 GIVING RESULT
          ELSE
            MULTIPLY N BY 9 GIVING RESULT
          END-IF.
       END PROGRAM SIMPLE-MULTIPLICATION.
      