// 6 kyu Happy Coding : a Spy On the Train
//
// You are a spy. You lurk in the enemy's control zone. Your task is to get the length data of a railway, accurate to meters.
//
// Although you have taken all kinds of technical measures, you still haven't finished your task.
//
// Now, You can only use the last method: Take the train, record the sounds you hear, and then calculate the length of the railroad.
//
// You will hear these voices:
//
// 1. "呜呜呜". This is the whistle of the train when it comes in or out of the station.
//
// That is, When you hear the sound for the first time, the train leaves the
// station and goes into high speed; When you hear the sound for the second
// time, The train pulled into the station and goes into low speed. and so on.
//
// 2. "哐当". This is the sound of the train hitting the railroad track.
//
// That is, Every time you hear it, the train advances 20 meters(high speed)
// or 10 meters(low speed).
//
// 3. Any other sound. These are all noise, please ignore them ;-)
//
// Examples
//
// For sounds="呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"
// The output should be 150.
//
// For sounds="呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"
// The output should be 300.
//
// For sounds="呜呜呜哐当哐当面包饮料矿泉水了啊，哐当桶面火腿肠茶叶蛋了啊哐当哐当呜呜呜哐当哐当哐当北京站到了，下车的旅客请带好您的行李，准备下车哐当哐当"
// The output should be 150.
//
// Answer:
function lengthOfRailway(sounds) {
  let conv = sounds
    .replace(/呜呜呜/gi, "W")
    .replace(/哐当/gi, "T")
    .replace(/[^WT]/gi, "");
  let fast = false;
  let tot = 0;
  for (let c of conv) {
    if (c === "W") fast = !fast;
    else tot += fast ? 20 : 10;
  }
  return tot;
}
