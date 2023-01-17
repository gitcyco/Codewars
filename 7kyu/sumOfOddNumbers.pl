# 7 kyu Sum of odd numbers
# 
# Given the triangle of consecutive odd numbers:
# 
#              1
#           3     5
#        7     9    11
#    13    15    17    19
# 21    23    25    27    29
# ...
# 
# Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
# 
# 1 -->  1
# 2 --> 3 + 5 = 8
# 
# Answer:
package Solution;

use 5.30.0;
use strict;
use warnings;
use Exporter qw(import);
our @EXPORT_OK = qw(comp);

# input int; output int
sub row_sum_odd_numbers {
    return $_[0] * $_[0] * $_[0];
}