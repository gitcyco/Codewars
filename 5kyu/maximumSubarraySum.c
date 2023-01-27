// 5 kyu Maximum subarray sum
//
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
//
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
//
// Answer:
#include <stddef.h>

int maxSequence(const int *array, size_t n)
{
    int max = 0;
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        max += array[i];
        if (max < 0)
            max = 0;
        if (sum < max)
            sum = max;
    }
    return sum;
}
