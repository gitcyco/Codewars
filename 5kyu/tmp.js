// Just a collection of codewars attempts, for posterity and refactoring.


  // just a small amount of possible functions to start testing with.
var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

// Extend the Function prototype with a method pipe
Function.prototype.pipe = function(v) {
  
  let self = this;
  console.log(v);
  console.log(this);
  //console.log(this.arguments);
  console.log(typeof(v));
  
  function e(i) {
    if(typeof i !== "function") {
      return self(i);
    } else return i();
  }
  
  if(typeof v !== "function") {
    return self[v]();
  } else return e(v);
  
  
    
  
  if(typeof v === "function") {
    console.log("func");
    return function i(e) {
      console.log("inside e");
      if(typeof e !== "function") {
        return e
      } else e();
      e()};
  } else {
    console.log("not func");
    return 20;
    return v;
  }
  return v;
}

// 5 kyu Least Common Multiple
var lcm = function (...args) {
  return args.reduce((a,b) => (a * b) / gcd(a, b));
};

function gcd(...args) {
  return args.reduce((a, b) => b === 0 ? a : gcd(b, a % b));
}



// 5 kyu Car Park Escape

/////////////////
//scratch

// test data
let c1 = [[1, 0, 0, 0, 2],
          [0, 0, 0, 0, 0]]; D1

let c2 = [[2, 0, 0, 1, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0]]; R3, D2, R1

let c3 = [[0, 2, 0, 0, 1],
          [0, 0, 0, 0, 1],
          [0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0]]; R3, D3

let c4 = [[1, 0, 0, 0, 2],
          [0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]]; D2, L4, D1, R4

let c5 = [[0, 0, 0, 0, 2]]; []

let c6 = [[0, 0, 2, 0, 0]]; R2

let c7 = [[2, 0, 0, 0, 0]]; R4

let c8 = [[0, 0, 0, 0, 1],
          [0, 1, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 2],
          [0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]]; D2, L4, D1, R4

let c9 = [[0, 0, 0, 0, 1],
          [0, 1, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 2]]; []

let c10 = [[0, 0, 0, 0, 1],
           [0, 1, 0, 0, 0],
           [1, 0, 0, 0, 0],
           [1, 0, 0, 0, 0],
           [0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0],
           [0, 2, 0, 0, 0]]; R3

let c11 =  [[0, 0, 0, 0, 1],
            [0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0]]; D1

let c12 = [[0, 0, 0, 0, 1],
           [0, 1, 0, 0, 0],
           [1, 0, 0, 0, 0],
           [1, 0, 0, 0, 0],
           [0, 0, 0, 0, 1],
           [0, 2, 0, 0, 0],
           [0, 0, 0, 0, 0]]; D1, R3

// Find index of 2, starting point
// find index of 1, stairs
// set either Lx or Rx to difference between them
// 1 (stairs) becomes new starting point
// loop find stairs, set Lx or Rx or Dx
// on every floor but the first (where 2 is) if 1 is same index as previous floor, increment Dx and move to next floor
let downObj = {D: 0};
function findStairs(arr, start) {
  //let stairs = arr.indexOf(1);
  //if(arr.indexOf(1) == start) downObj.D++;
  return (start > arr.indexOf(1)) ? 0 - (start - arr.indexOf(1)) : arr.indexOf(1) - start;
}

// Plan 2:
// simply walk a value, left, right and down.
// ie. Startpoint, then 3 left:
// L3 -> D1
// D2
// R3 -> D1
// at bottom... R3
//  becomes: L3, D2, R3, D1, R3
// 
// Traverse via x,y:
//        - ************
//        0 * S      C *
//        1 *   S      *
// Y axis 2 *   S      *
//        3 *         S*
//        4 * S        *
//        5 *          E
//        - ************
//          -0123456789-
//            X axis
// C = CAR
// S = Stairs
// E = Exit

function escapePlan(carpark) {

  for(let i = 0; i < carpark.length - 1; i++) {
    console.log(carpark)
    if(carpark[i].indexOf(2)) break;
    carpark.shift();
  }
  console.table(carpark);
}


function escape(carpark){
  console.log(carpark)
  let newArr = [];
  let D = 0, stairs, prevStart;

  //DOESN"T ALWAYS START AT INDEX 0!
  carpark.forEach((arr,i) => {
    if(i == carpark.length - 1) {
      //newArr.push(`R${0 - (carpark[i-1].indexOf(1) - arr.length - 1)}`)
      // final floor, only have Rx where x is the distance to end of array
      
      if (i==0) {
        if(arr.length - 1 - arr.indexOf(2)) newArr.push(`R${(arr.length - 1 - arr.indexOf(2))}`)
      } else {
        newArr.push(`D${++D}`);
        if (arr.length - 1 - carpark[i-1].indexOf(1)) newArr.push(`R${(arr.length - 1 - carpark[i-1].indexOf(1))}`);
      }
      
      console.log("bot", i);
    } else {
      if(i) {
        // not the first floor
        // use index of stairs from previous floor as a current starting point
        stairs = findStairs(arr, carpark[i-1].indexOf(1), 1)
      } else {
        // first floor
        // use index of the car (2) as starting point
        stairs = findStairs(arr, arr.indexOf(2), 1)
      }
      console.log("stairs: ", stairs);
      if(stairs < 0) {
        // left side
        if(i > 0) {
          newArr.push(`D${++D}`);
          D = 0;
        }
        newArr.push(`L${Math.abs(stairs)}`);
        console.log("lD", i);
        
      } else if (stairs > 0) {
        // right side
        if(i > 0) {
          newArr.push(`D${++D}`);
          D = 0;
        }
        newArr.push(`R${stairs}`);
        console.log("rD", i);
        
      } else {
        // stairs on same spot as previous floor
        D++;
        console.log("DDDD:" , D, i)
        //if(i==0) newArr.push(`D${D}`);
      }
      // first floor, so push D1 as our first descent
      //if(i==0) newArr.push(`D${++D}`);
      if(stairs == 0) {
      //newArr.push(`D${++D}`);
      }
    //newArr.push(`D${++D}`);
    }

  })
  console.log(newArr)
  return newArr
}



function findStairs(arr, start, find) {
  return (start > arr.indexOf(find)) ? 0 - (start - arr.indexOf(find)) : arr.indexOf(find) - start;
}

// find current index of 2
// traverse left and right to find nearest 1 - this becomes Lx or Rx
// use that index as starting point in next Array (D1 for first level down, to Dx)
// traverse left and right to find nearest 1 - this becomes Lx or Rx
// ...
// at last Array, traverse to the Array.length (last item in Array, this is the exit) - this becomes Rx
// return full set of steps, ex. L2, D1, R2, D1, L3, D1, R4 (R4 is exit)

// to traverse: split array at 2, or index of previous 1 if on a lower floor, into left and right halves
//    find lowest index of 1 where:
//      (1 must be present in array)
//      reverse left array  - arr.slice(0, a.indexOf(2))  (2 for starting floor, index of prev 1 otherwise)
//      normal right array  - arr.slice(a.indexOf(2) +1)  ""
