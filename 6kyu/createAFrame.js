// 6 kyu Create a frame!
//
// *************************
// *  Create a frame!      *
// *           __     __   *
// *          /  \~~~/  \  *
// *    ,----(     ..    ) *
// *   /      \__     __/  *
// *  /|         (\  |(    *
// * ^  \  /___\  /\ |     *
// *    |__|   |__|-..     *
// *************************
// 
// Given an array of strings and a character to be used as border, output the frame with the content inside.
// 
// Notes:
// 
//     Always keep a space between the input string and the left and right borders.
//     The biggest string inside the array should always fit in the frame.
//     The input array is never empty.
// 
// Example
// 
// frame(['Create', 'a', 'frame'], '+')
// 
// Output:
// 
// ++++++++++
// + Create +
// + a      +
// + frame  +
// ++++++++++
//
// Answer:
const frame = (text, char) => {
    const w = [...text].sort((a, b) => b.length - a.length)[0].length;
    text = text.map(e => char + ' ' + e.padEnd(w + 1, ' ') + char);
    let out = char.repeat(w + 4) + '\n' + text.join('\n') + '\n' + char.repeat(w + 4);
    return out;
};