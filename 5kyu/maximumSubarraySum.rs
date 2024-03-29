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
fn max_sequence(seq: &[i32]) -> i32 {
    let mut max = 0;
    let mut sum = 0;
    for i in seq.iter() {
        max = if max + i > 0 { max + i } else { 0 };
        sum = if sum < max { max } else { sum };
    }
    return sum;
}
