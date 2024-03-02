// 6 kyu Imperfect Network #1 (duplicate messages)
//
// You are given the outline of a network client.
// The network client as it is assumes that the network will never corrupt
// any data, will never lose any data, will always deliver data in the order it was sent, and will never duplicate any data.
//
// For the purposes of this Kata, assume that the network will never corrupt
// any data, will never lose any data, will always deliver data in the order it was sent, but that it may send duplicate data.
// Ensure that the callback function is not invoked for these duplicates.
//
// The data sent into the network client's send() method will always be a string.
// The data sent into the sendFunction must also be a string.
// That data will be received by the peer one or more times in this Kata.
//
// I will create two instances of your class: A and B. I will use A to send data to B and B to send data to A.
// Data sent from A to B may arrive at B more than once.
// Data sent from B to A may arrive more than once.
// If the test case says: "B sends three duplicates to A" that means that A sent some data to B and B received it three times.
//
// Here is an example of a perfect network that would use your network class:
//
// function PerfectNetwork(callbackA, callbackB) {
//     var network = this;
//     this.clientA = new NetworkClient(
//         function (data) { network.clientB.recv(data); }, callbackA);
//     this.clientB = new NetworkClient(
//         function (data) { network.clientA.recv(data); }, callbackB);
// };
//
// var perfect = new PerfectNetwork(
//     function (data) { console.log("CLIENT-A Got: " + data); },
//     function (data) { console.log("CLIENT-B Got: " + data); }
// );
//
// perfect.clientA.send("abcd");
// perfect.clientA.send("wxyz");
// perfect.clientB.send("1234");
// perfect.clientA.send("EOF");
//
// This would output:
//
// CLIENT-B Got: abcd
// CLIENT-B Got: wxyz
// CLIENT-A Got: 1234
// CLIENT-B Got: EOF
//
// In this Kata, the naive client outline could very well produce the following output
// with a less-than-perfect network for that same sequence of send calls:
//
// CLIENT-B Got: abcd
// CLIENT-B Got: abcd
// CLIENT-B Got: wxyz
// CLIENT-A Got: 1234
// CLIENT-A Got: 1234
// CLIENT-B Got: EOF
// CLIENT-B Got: EOF
// CLIENT-B Got: EOF
//
// Answer:
class NetworkClient {
  constructor(sendFunction, callback) {
    this.sendFunction = sendFunction;
    this.callback = callback;
    this.counter = 0;
    this.next = 0;
    this.keys = {};
  }
  send(data) {
    this.sendFunction(`${this.counter++}-${data}`);
  }
  recv(data) {
    let id = null;
    let out = data.replace(/^\d+-/, (e) => {
      id = +e.replace(/-/, "");
      return "";
    });
    this.keys[id] = out;
    while (this.next in this.keys) {
      this.callback(this.keys[this.next++]);
    }
  }
}
