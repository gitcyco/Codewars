// 8 kyu Fake Binary
//
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// Note: input will never be an empty string
//
// Answer:
fn fake_bin(s: &str) -> String {
    return s
        .chars()
        .map(|c| if c.to_digit(10) < Some(5) { "0" } else { "1" })
        .collect::<String>();
}
