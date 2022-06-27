// 5 kyu Human Readable Time
//
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// 
//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59
// 
// The maximum time never exceeds 359999 (99:59:59)
// 
// You can find some examples in the test fixtures.
//
// Answer:
export function humanReadable(s: number): string {
    const hrs: string = parseInt((s / 3600).toString()).toString().padStart(2, '0');
    s = s % 3600;
    const min: string = parseInt((s / 60).toString()).toString().padStart(2, '0');
    s = s % 60;
    const sec: string = parseInt(s.toString()).toString().padStart(2, '0');
    return `${hrs}:${min}:${sec}`;
}