      * 8 kyu Find Maximum and Minimum Values of a List

       identification division.
       program-id. Minimum.
       data division.
      
       WORKING-STORAGE SECTION.
       01 counter       pic 99 value 1.
      
       linkage section.
       01  arr.
           05 arrLength     pic 9(2).
           05 xs            pic s9(38) occurs 40 times 
                                       depending on arrLength.
       01  result           pic s9(38) sign leading.
      
       procedure division using arr result.
      
          initialize result.
          MOVE xs (1) to result.
          PERFORM MINSUB VARYING COUNTER from 1 by 1 UNTIL counter > arrLength.
          goback.
      
       MINSUB.
          IF xs(counter) < result
            MOVE xs(counter) to result
          END-IF.
       end program Minimum.
      
       identification division.
       program-id. Maximum.
       data division.
      
       WORKING-STORAGE SECTION.
       01 counter       pic 99 value 1.
      
       linkage section.
       01  arr.
           05 arrLength     pic 9(2).
           05 xs            pic s9(38) occurs 40 times 
                                       depending on arrLength.
       01  result           pic s9(38) sign leading.
      
       procedure division using arr result.
      
          initialize result.
          MOVE xs (1) to result.
          PERFORM MAXSUB VARYING COUNTER from 1 by 1 UNTIL counter > arrLength.
          goback.
      
       MAXSUB.
          IF xs(counter) > result
            MOVE xs(counter) to result
          END-IF.
       end program Maximum.
