// 5 kyu Simple Finite State Machine Compiler
//
// A Finite State Machine (FSM) is an abstract machine that can be in exactly one of a finite number of states at any given time. Simple examples are:
//
//     vending machines, which dispense products when the proper combination of coins is deposited;
//     elevators, whose sequence of stops is determined by the floors requested by riders;
//     traffic lights, which change sequence when cars are waiting;
//     combination locks, which require the input of combination numbers in the proper order.
//
// In this Kata we are going to design our very own basic FSM class that takes in a string of instructions
//
// instructions is a string input with the following format:
//
// first; next_if_input_0, next_if_input_1; output\n
// second; next_if_input_0, next_if_input_1; output\n
// third; next_if_input_0, next_if_input_1; output
//
// A basic example would be:
//
// const instructions = (
//   'S1; S1, S2; 9\n' +
//   'S2; S1, S3; 10\n'+
//   'S3; S4, S3; 8\n' +
//   'S4; S4, S1; 0' )
//
// Where each line in the string describes a state in the FSM.
// Given in the example, if the current state was S1, if the input is 0 it would loop back to itself: S1 and if the input is 1 it would go to S2
//
// The instructions are compiled into the FSM class, then the runFSM() function will be called to simulate the compiled FSM.
//
// Example:
//
// // runFSM takes two arguments:
//
// start = 'S1'
// // where start is the name of the state that it starts from
//
// sequence = [0, 1, 1, 0, 1]
// // where sequence is a list of inputs
// // inputs are only 1 or 0 (1 input variable)
// // to keep it simple with this Kata
//
// // Input / Output
// runFSM(start, sequence)  --returns-->  [final_state, final_state_value, path]
//
// // runFSM should return an array as:
// final_state       //= name of final state
// final_state_value //= integer value of state output
// path              //= array of states the FSM sequence went through
//
// From the given example, when run_fsm is executed the following should proceed below
//
// instructions:
// S1; S1, S2; 9
// S2; S1, S3; 10
// S3; S4, S3; 8
// S4; S4, S1; 0
//
// start: S1
// sequence: 0, 1, 1, 0, 1
//
// input 0: S1->S1
// input 1: S1->S2
// input 1: S2->S3
// input 0: S3->S4
// input 1: S4->S1
//
// final state: S1
// output: 9
//
// Answer:
class FSM {
  constructor(instructions) {
    this.key = FSM.parse(instructions.split("\n"));
  }
  runFSM(start, sequence) {
    // return array: [final_state, final_state_output, path]
    const path = [start];
    let cur = this.key[start];
    for (let ins of sequence) {
      path.push(cur[ins]);
      cur = this.key[cur[ins]];
    }
    return [cur.name, cur.output, path];
  }
  static parse(ins) {
    const raw = ins
      .filter((e) => e)
      .reduce((obj, row) => {
        const [tag, move, output] = row.split(";");
        const [move0, move1] = move.split(",").map((e) => e.trim());
        obj[tag] = { name: tag, 0: move0, 1: move1, output: +output };
        return obj;
      }, {});
    return raw;
  }
}
