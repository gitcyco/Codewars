-- 8 kyu Simple multiplication
-- 
-- This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
-- 
-- Answer:
SELECT number, CASE WHEN number % 2 = 0 THEN number * 8 ELSE number * 9 END as res FROM multiplication