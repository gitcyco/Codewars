// 6 kyu Make A Window
//
// Make me a window. I'll give you a number (N). You return a window.
// 
// Rules:
// 
// The window will always be 2 x 2.
// 
// The window needs to have N number of periods across and N number of periods vertically in each pane.
// 
// Example:
// 
// N = 3
// 
// ---------
// |...|...|
// |...|...|
// |...|...|
// |---+---|
// |...|...|
// |...|...|
// |...|...|
// ---------
// 
// Note: there should be no trailing new line characters at the end.
//
// Answer:
function makeAWindow(n, w = '') {
    w += `${'-'.repeat(n + n + 3)}\n` + `|${'.'.repeat(n)}|${'.'.repeat(n)}|\n`.repeat(n);
    w += `|${'-'.repeat(n)}+${'-'.repeat(n)}|\n`;
    w += `|${'.'.repeat(n)}|${'.'.repeat(n)}|\n`.repeat(n) + `${'-'.repeat(n + n + 3)}`;
    return w;
}