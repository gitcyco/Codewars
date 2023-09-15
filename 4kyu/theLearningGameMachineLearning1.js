// 4 kyu The learning game - Machine Learning #1
//
// The learning game - Machine Learning #1
//
// Growing up you would have learnt a lot of things like not to stand in fire, to drink food and eat water and not to jump off
// very tall things But Machines have it difficult they cannot learn for themselves we have to tell them what to do, why
// don't we give them a chance to learn it for themselves?
//
// Task
//
// Your task is to finish the Machine object. What the machine object must do is learn from its mistakes!
// The Machine will be given a command and a number you will return a random action.
// After the command has returned you will be given a response (true/false) if the response is true then
// you have done good, if the response is false then the action was a bad one.
// You must program the machine to learn to apply an action to a given command using the reponse given.
// Note: It must take no more than 20 times to teach an action to a command also different commands can have the same action.
//
// Info
//
//     In the preloaded section there is a constant called ACTIONS it is a function that returns the 5 possible actions.
//     In Java, this a constant Actions.FUNCTIONS of type List<Function<Integer, Integer>>.
//     In C++, the actions can be accessed by get_action(i)(unsigned int num) where i chooses the function (and therefore can range from 0 to 4) and num is its argument.
//     In python ACTIONS() returns a list of lambdas.
//     In Golang Actions() retruns a function slice []func(int) int
//
// Answer:
class Machine {
  constructor() {
    this.map = {};
    this.lastAction = null;
    this.actions = ACTIONS();
    // Noted here for documentation sake:
    // this.actions = [
    //   (num) => num + 1,
    //   (num) => num * 0,
    //   (num) => num / 2,
    //   (num) => num * 100,
    //   (num) => num % 2,
    // ];
  }
  command(cmd, num) {
    this.lastAction = cmd;
    if (!this.map[cmd]) this.map[cmd] = 0;
    return this.actions[this.map[cmd]](num);
  }
  response(resp) {
    if (!resp) this.map[this.lastAction]++;
  }
}
