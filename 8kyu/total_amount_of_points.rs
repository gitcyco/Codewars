// 8 kyu Total amount of points
//
// Our football team has finished the championship.
//
// Our team's match results are recorded in a collection of strings.
// Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
//
//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)
//
// We need to write a function that takes this collection and returns the number
// of points our team (x) got in the championship by the rules given above.
//
// Notes:
//
//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4
//
// Answer:
fn points(games: &[String]) -> u32 {
    let mut sum: u32 = 0;
    for game in games {
        let mut parts: Vec<&str> = game.split(":").collect();
        let x: u32 = parts[0].parse().unwrap();
        let y: u32 = parts[1].parse().unwrap();
        if x > y {
            sum += 3;
        } else if x == y {
            sum += 1;
        }
    }
    return sum;
}
