// 7 kyu Valid Parentheses
//
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples
//
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
//
// Constraints
//
// 0 <= length of input <= 100
//
//     All inputs will be strings, consisting only of characters ( and ).
//     Empty strings are considered balanced (and therefore valid), and will be tested.
//     For languages with mutable strings, the inputs should not be mutated.
//
// Answer:
#include <stdbool.h>
#include <string.h>

bool valid_parentheses(const char *str)
{
    int count = 0;
    for (int i = 0; i < strlen(str); i++)
    {
        if (str[i] == '(')
            count++;
        else
            count--;
        if (count < 0)
            return false;
    }
    return count == 0;
}