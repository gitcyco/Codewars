// 7 kyu Changing letters
//
// When provided with a String, capitalize all vowels
//
// For example:
//
// Input : "Hello World!"
//
// Output : "HEllO WOrld!"
//
// Note: Y is not a vowel in this kata.
//
// Answer:
#include <string.h>

char *capitalize_vowels(char *string)
{
    for (unsigned i = 0; i < strlen(string); i++)
    {
        switch (tolower(string[i]))
        {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            string[i] = toupper(string[i]);
            break;
        default:
            break;
        }
    }
    return string;
}