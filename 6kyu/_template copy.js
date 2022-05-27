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


// 6 kyu Word search
  function indexOf(words, target){
    console.log(words, target);
    let start = 0;
    let targetStart = target.length - 1;
    let targetEnd = target.length + 1;
    let end = words.length - 1;
    let mid = Math.floor((start + end) / 2);
    console.log('before while, mid: ', mid);
    while(words[mid].length != targetStart) {
      //console.log('in while');
      if(words[mid].length < targetStart) {
        console.log('less than')
        start = mid + 1;
      } else {
        console.log('greater than')
        end = mid - 1;
      }
        mid = Math.floor((start + end) / 2);
    }
    console.log(words[mid]);
      
  //       return words.indexOf(target) // nah, i don't think so..
    
  }