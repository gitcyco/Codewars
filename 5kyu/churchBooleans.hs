-- 5 kyu Church Booleans
-- 
-- There are a few Katas about Church Numerals so let's talk about booleans.
-- 
-- In lambda calculus, the only primitive are lambdas. No numbers, no strings, and of course no booleans. Everything is reduced to anonymous functions.
-- 
-- Booleans are defined thusly (this definition is preloaded for you) :
-- 
-- const True = T => F => T;
-- const False = T => F => F;
-- 
-- Your task will be to implement basic operators on booleans (using only lambdas and function application) : Not, And, Or and Xor.
-- 
-- To help, the function unchurch comes preloaded, and returns the native boolean given a church boolean :
-- 
-- unchurch(True); //true;
-- 
-- Note: You should not use the following:
-- 
--     numbers
--     strings
--     booleans
--     boolean operators
--     objects (curly brackets) or arrays (square brackets)
--     regexp
--     "new"
-- 
-- Answer:
{-# Language RankNTypes #-}

module Church (not,and,or,xor) where

import Prelude hiding (Bool,False,True,not,and,or,(&&),(||),(==),(/=))
import Church.Preloaded (Boolean,false,true)

not :: Boolean -> Boolean
and,or,xor,nand :: Boolean -> Boolean -> Boolean

-- Start with a NAND gate, which can be used to create all other logic gates
nand = \ a b -> a(b)(a)(false)(true)

-- NOT gate logic from NAND: A NAND A
not = \ a   -> nand(a)(a)

-- AND gate logic from NAND: ( A NAND B ) NAND ( A NAND B )
and = \ a b -> nand(nand(a)(b))(nand(a)(b))

-- OR gate logic from NAND: ( A NAND A ) NAND ( B NAND B )
or  = \ a b -> nand(nand(a)(a))(nand(b)(b))

-- XOR gate logic from NAND: ( A NAND ( A NAND B ) ) NAND ( B NAND ( A NAND B ) )
xor = \ a b -> nand(nand(a)(nand(a)(b)))(nand(b)(nand(a)(b)))