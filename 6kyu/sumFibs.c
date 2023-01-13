// 6 kyu SumFibs
//
// Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.
//
// Example:
//
// sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number in the sequence and doesn't have another
// number in the sequence to get added to in the indexed Fibonacci sequence.
//
// Example:
//
// sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// // 2 + 8 + 34 = 44;
//
// Answer:
unsigned long long sum_fibs(unsigned long long n)
{
    unsigned long sum = 0;
    unsigned long r[n];
    for (unsigned long i = 0; i < n + 1; i++)
    {
        r[i] = i == 0 || i == 1 ? i : r[i - 1] + r[i - 2];
        if (r[i] % 2 == 0)
            sum += r[i];
    }
    return sum;
}