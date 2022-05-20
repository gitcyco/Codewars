// DESCRIPTION
//
//
// Answer:
Plugboard=function(wires){
    if(!wires) {
  //     this.wiresArr = wires.split('')
      this.wires = [];
    } else {
      this.wiresArr = wires.split('')
      this.wires = [];
      while(this.wiresArr.length) {
        this.wires.push(this.wiresArr.splice(0,2));
      }
    }
    //if(this.wires.length > 9) return false;
    console.log("Wire pairs: ", wires);
  
    
    
    this.process = function(wire){
      if(this.wires.length > 9) throw false;
      console.log("Convert: ", wire)
      console.log("Wires: ", this.wires)
      console.log(this.wiresArr.length)
      // find wire in this.wires arrays of pairs
      for(let i = 0; i < this.wires.length; i++) {
        if(this.wires[i].includes(wire)) {
          console.log("filtered: ", this.wires[i].filter(e=>e!=wire));
          return this.wires[i].filter(e=>e!=wire).join('');
        }
      }
      return wire;
    }
    return this;
  }