// 6 kyu Make the Deadfish Swim
//
// Write a simple parser that will parse and run Deadfish.
// 
// Deadfish has 4 commands, each 1 character long:
// 
//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array
// 
// Invalid characters should be ignored.
// 
// parse("iiisdoso") => [8, 64]
//
// Answer:
export function parse(data: string): number[] {
    let reg: number = 0, out: number[] = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'i') reg++;
        if (data[i] === 'd') reg--;
        if (data[i] === 's') reg *= reg;
        if (data[i] === 'o') out.push(reg);
    }
    return out;
}