// 6 kyu Kids and candies
//
// I've invited some kids for my son's birthday, during which I will give to each kid some amount of candies.
// 
// Every kid hates receiving less amount of candies than any other kids, and I don't want to have any candies left - giving it to my kid would be bad for his teeth.
// 
// However, not every kid invited will come to my birthday party.
// 
// What is the minimum amount of candies I have to buy, so that no matter how many kids come to the party in the end, I can still ensure that each kid can receive the same amount of candies, while leaving no candies left?
// 
// It's ensured that at least one kid will participate in the party.
//
// Answer:
const main = (l, h) => lcmRange(range(l, h));
const gcd = (a, b) => b == 0 ? a : gcd (b, a % b);
const lcm = (a, b) =>  a / gcd (a, b) * b;
const lcmRange = val => val.reduce(lcm, 1);
const range = (l, h) => [...Array (h - l + 1)].map((e, i) => l + i);

const candiesToBuy = kids => kids < 3 ? kids : main(2,kids);