// 8 kyu Invert values
//
// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
//
// Answer:
fn invert(values: &[i32]) -> Vec<i32> {
    return values.iter().map(|x| -x).collect();
}
