// 8 kyu I love you, a little , a lot, passionately ... not at all
//
// Who remembers back to their time in the schoolyard, when girls would
// take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"
//
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
//
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say at the last petal
// for a flower of a given number of petals.
// The number of petals is always greater than 0.
//
// Answer:
fn how_much_i_love_you(nb_petals: u16) -> &'static str {
    match (nb_petals - 1) % 6 {
        0 => "I love you",
        1 => "a little",
        2 => "a lot",
        3 => "passionately",
        4 => "madly",
        5 => "not at all",
        _ => "",
    }
}
