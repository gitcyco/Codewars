// 6 kyu Make the Deadfish Swim
//
// Write a simple parser that will parse and run Deadfish.
//
// Deadfish has 4 commands, each 1 character long:
//
//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array
//
// Invalid characters should be ignored.
//
// parse("iiisdoso") => [ 8, 64 ]
//
// Answer:
#include <stddef.h>
#include <stdlib.h>
#include <string.h>

int *parse(const char *program)
{
    size_t len = strlen(program);
    int mem = 0;
    int arrIdx = 0;
    int *array = malloc(sizeof(int) * len);
    for (size_t i = 0; i < len; i++)
    {
        if (program[i] == 'i')
            mem++;
        else if (program[i] == 'd')
            mem--;
        else if (program[i] == 's')
            mem *= mem;
        else if (program[i] == 'o')
            array[arrIdx++] = mem;
    }
    return array;
}

// Using switch/case, a bit long:
int *parse_switch(const char *program)
{
    // return a heap-allocated int array
    // its length shall be at least equal to
    // the count of 'o' commands in the program
    size_t len = strlen(program);
    int mem = 0;
    int arrIdx = 0;
    int *array = malloc(sizeof(int) * len);
    for (size_t i = 0; i < len; i++)
    {
        switch (program[i])
        {
        case 'i':
            mem++;
            break;
        case 'd':
            mem--;
            break;
        case 's':
            mem *= mem;
            break;
        case 'o':
            array[arrIdx++] = mem;
            break;
        }
    }
    return array;
}