// 6 kyu Sending Data into Generators: The Basics
//
// This exercise assumes basic knowledge of generators, including passing familiarity with the yield keyword.
// Catching You Up on Generators
//
// While it is obvious that you can obtain items from generators, it is less known that you can
// also send data into generators in languages like Python and JavaScript.
// We are going to explore the very basics of that today.
//
// First, we need to establish a couple of concepts:
//
//     Sending: To send something to a generator, you call the .next method on it
//     ith an argument - this argument will be the message.
//     It hence follows that calling .next() with no arguments sends the generator a message of undefined.
//
//     const yieldedValue = myGenerator.next('howdy from the outside world!').value
//
//     Receiving: By assigning the yield expression to a variable, you are able to access whatever was sent to the generator.
//
//     So, the following line inside a generator
//
//     const msg = yield 5
//
//     yields 5, pauses the generator, and gives control back to the caller.
//     If the caller sends a msg (or calls next() without arguments, which sends a message of undefined), the generator
//     stores that in the variable msg, does what it needs to do with this, and resumes until it yields another element.
//
//     Priming a Generator: To be able to send a message to a generator, you must have consumed at least
//     one element from it (i.e., called next on it at some point previously).
//     This is to ensure the generator actually gets to the part of its body that yields.
//
// Since this an introductory Kata, you may want to look at a sample example that puts all these concepts together:
// View example
// Here’s a generator that infinitely repeats the last message sent to it.
// Task
//
// Imagine you run a very tiny production line with two "worker" generators, gen1 and gen2, that generate data for you.
// Your task is to create a new generator function, round_robin (or roundRobin in JS), that will allow you
// to collect items from these two generators in a round-robin fashion.
//
// function* roundRobin(gen1, gen2) {
//   // ...
// }
//
// The term “round-robin” is often used to describe a process where participants take turns in a cyclic order.
// In this case, your generator function should yield one item from gen1, then one item from gen2, then one
// item again from gen1 and so forth, continuing this alternating pattern.
//
// Moreover, you may want to provide feedback to these generators based on their output.
// Your roundRobin generator should be open to being sent messages by calling the next method on it with a potential argument.
// When roundRobin receives a message, it should forward this message to the next generator in the sequence.
//
// For example, if roundRobin has just yielded an item from gen2, and you send
// a message to roundRobin, that message should internally be forwarded directly to gen1.
//
// const factory = roundRobin(gen1, gen2)
// console.log(factory.next().value)    // Yields one item from gen1.
// console.log(factory.next().value)    // Yields one item from gen2.
// console.log(factory.next().value)    // Yields one item from gen1.
// console.log(factory.next(32).value)  // Yields one item from gen2 after sending 32 to it.
// console.log(factory.next(6).value)   // Yields one item from gen1 after sending 6 to it.
//
// Note that calling next with a message consumes one element (just like next without arguments).
// It may be easy to accidentally miss out this item, so don't.
//
// The generators provided to your function will use undefined as the sentinel value, not null. Beware!
// Assumptions
//
//     You do NOT need to worry about priming the generators before sending.
//     By the time you need to send messages to the generators, the testing process will have ensured
//     that the generators are already in a state where they are ready to receive.
//     Both generators are infinite - neither of them gets exhausted, so you don't need to handle that.
//     In the random tests, the generators that will be fed into your function will exclusively
//     be among a pool of four generators I wrote. This is to make debugging easier and more sane from your side.
//     View provided generators
//         count_up or countUp (also included in the fixed tests): Infinitely counts up from whatever number
//         sent to it (or 0 by default). For example, if you send 3 to it, it will yield back 3 4 5 6 7 8 9 ....
//         gen_multiples or genMultiples: Infinitely yields from the multiplication table of the number
//         sent to it (0's table, by default). For example, if you send 3 to it, it will yield back 0 3 6 9 12 15 ....
//         split_string or splitString (also included in the fixed tests): Infinitely yields characters f
//         rom a string sent to it, and loops back when finished. If sent nothing, loops ''.
//         For example, if you send 'hey' to it, it will yield back 'h' 'e' 'y' 'h' 'e' 'y' ....
//         repeat_string or repeatString: Infinitely repeats a string sent to it. For example, if you
//         send 'hey' to it, it will yield back 'hey' 'hey' 'hey' 'hey' ....
//
// Answer:
function* roundRobin(gen1, gen2, msg) {
  while (true) {
    msg = yield gen1.next(msg).value;
    msg = yield gen2.next(msg).value;
  }
}
