// 6 kyu Parking Lot #1
//
// Your job is to incrementally develop a fully robotized parking lot management system.
//
// In this first step, we just want to manage a row of adjacent parking spots.
//
//     All parking spots have a width of 1 meter.
//     We allow motorbikes, regular cars and vans to park. Motorbikes occupy exactly 1 spot, regular cars take 2 adjacent spots, and vans need 3 (also adjacent) spots.
//     All vehicles have a unique license number.
//     The arrival/departure dock is at one end of the row. In order to save both time and power consumption, vehicles are always parked as close as possible to the dock.
//     Once a vehicle is parked, the system does not move it.
//
// You will get the following helper classes : Bike, Car, and Van. All constructors only take the license plate as argument...
//
// const b=new Bike('AB-123') const c=new Car('CD-456') const v=new Van('EF-789')
//
// ... which can be accessed using the license attribute ...
//
// console.log(v.license); > 'EF-789'
//
// Your job is to implement a ParkingLot class, with one constructor and two methods.
//
//     new ParkingLot(size), which creates a ParkingLot with size spots, all initially empty.
//     park(vehicle), which returns true if the vehicle was parked successfully, false otherwise.
//     retrieve(license), which returns true if the vehicle was retrieved successfully, false otherwise.
//
// Answer:
class ParkingLot {
  constructor(size) {
    this.lot = new Array(size).fill(0);
    this.spaces = { Bike: 1, Car: 2, Van: 3 };
    this.vehicles = {};
  }
  park(vehicle) {
    let space = this.spaces[vehicle.constructor.name];
    let spots = [];
    let start = null;
    let tmp = space;
    for (let i = this.lot.indexOf(0); i < this.lot.length; i++) {
      if (this.lot[i] === 0) tmp--;
      else tmp = space;
      if (tmp === 0) {
        start = i - space + 1;
        break;
      }
    }
    if (start + space - 1 < this.lot.length && start !== null) {
      for (let i = 0; i < space; i++) {
        spots.push(i + start);
        this.lot[i + start] = 1;
      }
    } else return false;
    this.vehicles[vehicle.license] = [...spots];
    return true;
  }
  retrieve(license) {
    if (license in this.vehicles) {
      let arr = this.vehicles[license];
      for (let spot of arr) this.lot[spot] = 0;
      delete this.vehicles[license];
      return true;
    }
    return false;
  }
}
