// 6 kyu Finite State Automata 1: Traffic Lights
//
// The behavior of traffic lights can be expressed as a finite state machine.
// A graph of such a state machine's states and transitions could look like this:
//
//      States:      Transitions:
//     _________
// ┌─→/         \
// │ (    Red    )
// │  \_________/───┐
// │   _________    ├─ Prepare
// │  /         \←──┘
// │ ( Red+Amber )
// │  \_________/───┐
// │   _________    ├─ Move
// │  /         \←──┘
// │ (   Green   )
// │  \_________/───┐
// │   _________    ├─ Slow
// │  /         \←──┘
// │ (   Amber   )
// │  \_________/───┐
// │                ├─ Stop
// └───────────────┘
//
// Your task is to program a module which:
//
//     holds and initializes the state ID string
//     can be initialized with a list of transitions
//     provides a method for every declared transition
//     calling a transition method should carry out the transition
//         ...but only if it's legal according to the associated transition rule
//
// A single transition rule consists of three strings:
//
//     current - The state ID this transition may begin from (e.g. Red)
//     target - The state ID this transition may end at (e.g. Red+Amber)
//     method - A name for the method which advances the state (e.g. Prepare)
//
// All test cases have linear or circular graphs. You won't need to consider branching for now.
//
// Have fun! But also keep it readable, as you might need your solution in the next kata of this series.
//
// Answer:
/**
 * State Transition configuration object
 * @typedef {Object} TransitionConfig
 * @property {string} method  - Name of the method that can carry out the transition
 * @property {string} current - Name of the state that the transition begins from
 * @property {string} target  - Name of the state that the transition ends with
 */

class StateMachine {
  /**
   * Instantiates a new finite state machine
   * @param {Object}             options -
   * @param {string}             options.init        - The initial state name
   * @param {TransitionConfig[]} options.transitions - A list of transitions that define the FSM
   */
  constructor({ init, transitions }) {
    this.state = init;
    for (let transition of transitions) {
      this[transition.method] = function () {
        if (this.state === transition.current) this.state = transition.target;
      };
    }
  }
}
