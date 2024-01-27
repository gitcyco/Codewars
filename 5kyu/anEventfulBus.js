// 5 kyu An Eventful Bus
//
// You are a head of an intercity coach company which runs its business in the countryside.
// Recently you heard that one very large and famous company is launching
// auto-piloting robo-cars and decided that this is just what your wanted for your new night bus project.
//
// The idea is as follows - when people take their seats inside the bus, they inform the software
// about the station where they want to get off the bus.
// When the bus arrives at the station, those passengers who selected that station
// will be alerted by a vibration engine in the back of their seats.
// The trick is not to alert any other passengers - we do not want anyone to accidentally
// get off at the wrong town because it was dark and they didn't properly look around before leaving the bus.
//
// To implement that you will need a Bus constructor function to create bus objects. The bus object should have
//
//     a subscribe method to accept passengers' requests in the following form (here name is the station name):
//
//      bus.subscribe(name /*string*/, callback /*function*/);
//
//     an unsubscribe method to clean passengers' requests from the memory.
//
//      bus.unsubscribe(name /*string*/, callback /*function*/);
//
//     if no callback is provided, it removes all the callbacks for the given station
//
//     an emit method, which is called like that
//
//      bus.emit(name /*string*/ /*, some optional arguments */)
//
//     and calls all the callbacks from pasengers' alert requests for that station, and at the same time no other passengers'
//     callbacks should be invoked. It also uses all of its optional arguments as the arguments
//     to the callbacks (the invocation context is not important)
//
// Also you know the following:
//
//     the function is internal and you control all the data it receives, so no need to worry about the corrupted input.
//     the passengers will only pick one station as their desitnation, and it will not change during the trip.
//
// So while your team is discussing purchase of these magnificent auto-piloting buses
// on your behalf, you simply need to write the Bus function, because at the moment no one in your
// company appears to have any programming skills whatsoever. Off you go!
//
// Answer:
class Bus {
  constructor() {
    this.stations = new Map();
  }
  subscribe(station, func) {
    if (!this.stations.has(station)) {
      this.stations.set(station, new Map());
    }
    this.stations.get(station).set(func, func);
  }
  unsubscribe(station, func) {
    if (!func) {
      this.stations.set(station, new Map());
    } else {
      this.stations.get(station).delete(func);
    }
  }
  emit(station, ...rest) {
    if (this.stations.has(station)) {
      const funcs = this.stations.get(station).values();
      for (let func of funcs) func(...rest);
    }
  }
}
