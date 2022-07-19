// 8 kyu Convert a Number to a String!
//
// We need a function that can transform a number into a string.
// 
// What ways of achieving this do you know?
// Examples:
// 
// 123 --> "123"
// 999 --> "999"
//
// Answer:
123456*
       IDENTIFICATION DIVISION.
       PROGRAM-ID. 'number-to-string'.
       DATA DIVISION.
       LINKAGE SECTION.
       01 INPUT-VAR    PIC 9(06).
       01 RESULT       PIC X(06).
       PROCEDURE DIVISION USING INPUT-VAR
                                RESULT.
      
        MOVE INPUT-VAR to RESULT.
      
           GOBACK
            .
      