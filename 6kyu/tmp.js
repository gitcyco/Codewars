



// 6 kyu Sort the number sequence
function sortSequence(sequence){
  
  let newArr = sequence.map(e => e === 0 ? "x" : e)
                .join(',')
                .split('x')
                .map(e => e.split(',')
                .filter(x => x !='')
                .map(e => +e)
                .sort((a,b) => a-b))
                .filter(x => x !='')
                .sort((a,b) => (a.reduce((ac,e) => ac+=e,0)) - (b.reduce((ac,e) => ac+=e,0)));
  newArr.map(e => e.push(0));
  console.log(newArr);
  return [].concat.apply([], newArr);
  
  // let newArr = sequence.join(',')
  //             .split('0')
  //             .map(e => e.split(',')
  //             .filter(x => x !='')
  //             .map(e => +e)
  //             .sort((a,b) => a-b))
  //             .filter(x => x !='')
  //             .sort((a,b) => (a.reduce((ac,e) => ac+=e,0)) - (b.reduce((ac,e) => ac+=e,0)));
  // newArr.map(e => e.push(0));
  // console.log(newArr)
  // return [].concat.apply([], newArr);
}


function createSecretHolder(secret) {
  let val = secret;
    return {
        getSecret() {
            return val;
        },
        setSecret(newVal) {
            val = newVal;
        }
    }
}

// 6 kyu Closures and Scopes
function createFunctions(n) {
  const callbacks = [];
  for (let i=0; i<n; i++) callbacks.push(() => i);
  return callbacks;
}


// 6 kyu Fun with lists: map
function map(head, f) {
  if(!head) return null;
  let newHead = new Node(f(head.data));
  let current = head;
  let mapped = newHead;
  while(current.next) {
    mapped.next = new Node(f(current.next.data));
    mapped = mapped.next;
    current = current.next;
  }
  return newHead;
}


// 6 kyu Fun with lists: reduce
function reduce(head, f, init) {
  if(!head) return init;
  while(head) {
    init = f(init, head.data);
    head = head.next
  }
  return init;
}

// 6 kyu Fun with lists: countIf
function countIf(head, p) {
  if(!head) return 0;
  let count = 0;
  while(head) {
    if(p(head.data)) count++;
    head = head.next;
  }
  return count;
}

// 6 kyu Fun with lists: filter
function filter(head, p) {
  let newHead = null;
  let current = head;
  let prev = head;
  if(!head) return null;
  while(current) {
    if(p(current.data)) {
      if(!newHead) newHead = current;
      prev = current;
      current = current.next;
    } else {
      prev.next = current.next;
      current = current.next;
    }
  }
  return newHead;
}

// 6 kyu ASCII Fun #1: X- Shape
function x(n){
  let mid = Math.ceil(n / 2);
  let outer = [...Array(n)].map(e => '□').map(e=> [...Array(n+1)].map(e=>'□'));
  outer = outer.map(a=> a.map((e,i,arr) => i == arr.length - 1 ? `\n` : e));
   for(let k = 0; k < mid; k++) {
     outer[k][k] = outer[k][outer.length-1-k] = '■';
     outer[outer.length-1-k][k] = outer[outer.length-1-k][outer.length-1-k] = '■';
  }
  return [].concat(...outer).join('').slice(0,-1);
}

// 6 kyu Separating Strings
function sepStr(str) {
  let strArr = str.split(' ');
  let maxLen = strArr.reduce((acc,e,i,arr) => acc = e.length > acc ? e.length : acc,0);
  let outer = [...Array(maxLen)].map(e => '').map(e=> [...Array(strArr.length)].map(e=>''));
  strArr.forEach((e,i)=> e.split('').forEach((x,j)=>outer[j][i] = x));
  return outer;
}

// 6 kyuSometimes
const sometimes = function(fn) {
	let count = 0;
  return (...rest) => (++count % 2 == 0 && count > 3) ? "hmm, I don't know!" : fn(...rest);
}

////////////////////////////////////
// 6 kyu JS is Weird: Return a
x=(![]+[])[(+!+[])]

// []+![] == 'false'

/// xxx = ([]+![])[!++x]

// x=![]+[] == 'false'

// x=![] // false
// ++x   // 1
// x=(![]+[])[x] // 'a'
////////////////////////////////////

//////////////////////////////////////////////
// 6 kyu Base Conversion
function convert(input, source, target) {
  return base10toBaseX(target.length, target, baseXtoBase10(source.length, source, input));
}

function baseXtoBase10(base, source, val) {
  const key = source.split('');
  return val.split('').reverse().reduce((acc,e,i) => acc += key.indexOf(e) * (source.length**i),0)
}

function base10toBaseX(base, source, val) {
  const key = source.split('');
  let div = Math.trunc(val / base);
  let rem = val % base;
  let output = "";
  do {
    output = `${key[rem]}${output}`;
    rem = div % base;
    div = Math.trunc(div / base);
  } while(div > 0)
  if(rem > 0) output = `${key[rem]}${output}`;
  return output;
}
/////////////////////////////////////////////



// 6 kyu Shortest Distance to a Character
function shortesttoChar(s, c) {
  const ind = Array.from(s.matchAll(c), m => m.index);
  if(ind.length === 0 || s.length === 0 || c.length === 0) return [];
  return s.split('').map((e,i) => ind.map( val => Math.abs(i - val)).sort((a,b) => a-b)[0] );
}

// 6 kyu World Bits War
function bitsWar(numbers) {
  const evens = numbers.filter(e => !(e % 2));
  const odds = numbers.filter(e => e % 2)
  let oddWins = odds.reduce((acc, e) => acc += e > 0 ? countBits(e) : -countBits(e) ,0)
  let evenWins = evens.reduce((acc, e) => acc += e > 0 ? countBits(e) : -countBits(e) ,0)
  if(oddWins > evenWins) return "odds win";
  if(oddWins < evenWins) return "evens win";
  if(oddWins === evenWins) return "tie";
}
var countBits = function(n) {
  return n.toString(2).split('').filter(e => e == 1).length;
};


// 6 kyu Grill it!
function grille(message, code) {
  const binStr = code.toString(2).padStart(message.length, 0);
  //if(binStr.length > message.length) message = message.padStart(binStr.length, " ");
  //message = message.padStart(binStr.length, " ");
  return message.padStart(binStr.length, " ").split('').filter((e,i) => binStr[i] == 1 && e != ' ').join('');
  //return message.split('').filter((e,i) => binStr[i] == 1 && e != ' ').join('');
}

// 6 kyu Bit Counting
var countBits = function(n) {
  return n.toString(2).split('').filter(e => e == 1).length;
};

const countBits = n => n.toString(2).split('').filter(e => e == 1).length;

// 6 kyu ASCII hex converter
const Converter = {
  toAscii: function (hex) {
    let hexArr = [];
    for(let i = 0; i < hex.length; i+=2) {
      hexArr.push(hex.substring(i, i+2));
    }
    return hexArr.map(e => String.fromCharCode(`0x${e}`)).join('');
  },
  toHex: function (ascii) {
    return ascii.split('').map(e => e.charCodeAt(0).toString(16)).join('');
  }
}

// 6 kyu Binary to Text (ASCII) Conversion
function binaryToString(binary) {
  let binArr = [];
  for(let i = 0; i < binary.length; i+=8) {
      binArr.push(binary.substring(i, i+8));
  }
  return binArr.map(e => String.fromCharCode(`0b${e}`)).join('');
}

// 6 kyu chmod calculator in octal.
function chmodCalculator(perm) {
  const vals = {r: 4, w: 2, x: 1, "-": 0};
  //let u = getVal("user", perm, vals);
  //let g = getVal("group", perm, vals);
  //let o = getVal("other", perm, vals);
  //let test = ["user", "group", "other"].reduce((acc, e) => acc += getVal(e, perm, vals) ,"");
  return ["user", "group", "other"].reduce((acc, e) => acc += getVal(e, perm, vals) ,"");
  //return `${u}${g}${o}`;
}

const getVal = (id, perm, vals) => (perm[id] != undefined) ? perm[id].split('').reduce((acc, e) => acc += vals[e], 0) : 0;

// const getVal = (id, perm, vals) => (perm[id] != undefined) ? perm[id].split('').reduce((acc, e) => acc += vals[e], 0) : 0;

// 6 kyu Two Sum
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if(numbers[i] + numbers[j] === target) {
        return [i,j];
      }
    }
  }
}


// 6 kyuBinary string
function toBinaryString(number){
  let str = '';
  do {
    str = `${number & 1}${str}`;
    number>>=1;
  } while(number)
  return str;
}

// 6 kyu Count characters in your string
const count = string => string.split('').reduce((obj,val) => (obj[val] = (obj[val] + 1) || 1) ? obj : obj, {});

// 6 kyu Multiples of 3 or 5
function solution(number){
  let sum = 0;
  for(let i = 1; i < number; i++) {
    sum += (i%3===0 || i%5===0) ? i : 0;
  }
  return sum;
}
// ALSO: 6 kyu Multiples of 3 or 5
const solution = (num) => num > 0 ? [...Array(num)].map((e,i)=>e=i).reduce((a,e) => a += (e%3===0 || e%5===0) ? e : 0,0) : 0;

// 6 kyu How many pages in a book?
function amountOfPages(summary){
  let i, n=0;
  for(i=1; i < summary; i++) {
    if ((n += i.toString().length) === summary) break;
  }
  return i;
}


// 6 kyu Change it up
// a = 97, z=122
// just a test, flesh this out
// WORKS, now REFACTOR this ugly code
function changer(str) { 
  const vowels="aeiou";
  let newStr = char = '';
  let oldStr = str.toLowerCase();

  for(let i = 0; i < oldStr.length; i++) {
    if(oldStr[i].charCodeAt(0) < 97 || oldStr[i].charCodeAt(0) > 122) {
      newStr += oldStr[i];
      continue;
    }
    if((oldStr[i].charCodeAt(0) + 1) > 122) {
      char = String.fromCharCode(oldStr[i].charCodeAt(0) - 25)
    } else {
      char = String.fromCharCode(oldStr[i].charCodeAt(0) + 1)
    }
    newStr += (vowels.indexOf(char) != -1) ? char.toUpperCase() : char.toLowerCase();
  }
  return newStr;
}


// 6 kyu Odd-heavy Array
function isOddHeavy(n){
  const odds = n.filter(e => e % 2).sort()
  const evens = n.filter(e => !(e % 2)).sort((a,b) => b - a)
  return (odds[0] < evens[0]) || odds.length == 0 ? false : true
}

// hideous, but one line! above is clearer
function isOddHeavy(n){
  return (n.filter(e => e % 2).sort()[0] < n.filter(e => !(e % 2)).sort((a,b) => b - a)[0]) || n.filter(e => e % 2).sort().length == 0 ? false : true
}

// 6 kyu If you can read this...
function to_nato(words) {
	const nato = {
    "A": 	"Alfa ", "B": "Bravo ", "C": "Charlie ", "D": "Delta ", 
    "E": 	"Echo ", "F": "Foxtrot ", "G": "Golf ", "H": "Hotel ",
    "I": 	"India ", "J": "Juliett ", "K": "Kilo ", "L": "Lima ",
    "M": 	"Mike ", "N": "November ", "O": "Oscar ", "P": "Papa ",
    "Q": 	"Quebec ", "R": "Romeo ", "S": "Sierra ", "T": "Tango ",
    "U": 	"Uniform ", "V": "Victor ", "W": "Whiskey ", "X": "Xray ",
    "Y": 	"Yankee ", "Z": "Zulu ", 
    ",":  ",", ".": ". ", "!": "! ", "?": "? ",
  }
  
  return words.split('').map((e,i,a) => nato[e.toUpperCase()] ? a[i+1] == ' ' ? nato[e.toUpperCase()].trim() : nato[e.toUpperCase()] : e).join('').trim()

}

function to_nato(words) {
	const nato = {
    "A": 	"Alfa ", "B": "Bravo ", "C": "Charlie ", "D": "Delta ", 
    "E": 	"Echo ", "F": "Foxtrot ", "G": "Golf ", "H": "Hotel ",
    "I": 	"India ", "J": "Juliett ", "K": "Kilo ", "L": "Lima ",
    "M": 	"Mike ", "N": "November ", "O": "Oscar ", "P": "Papa ",
    "Q": 	"Quebec ", "R": "Romeo ", "S": "Sierra ", "T": "Tango ",
    "U": 	"Uniform ", "V": "Victor ", "W": "Whiskey ", "X": "Xray ",
    "Y": 	"Yankee ", "Z": "Zulu ", 
    ",": ",", ".": ".", "!": "!", "?": "?",
  }
  
  const wordArr = words.split('')
  console.log(wordArr)
  //wordArr.map
  const natoArray = wordArr.map((e,i,a) => nato[e.toUpperCase()] ? a[i+1] == ' ' ? nato[e.toUpperCase()].trim() : nato[e.toUpperCase()] : e)
  console.log(natoArray)
  return natoArray.join('').trim()
}



// 6 kyu A small difference


// Refactored:
function oneCharDifference(s1, s2) {
  let sStr = '', lStr = '', count = 0, result = false;
  if (s1 === s2) return false;
  if(s1.length < s2.length - 1 || s1.length > s2.length + 1) return false;

  if(s1.length === s2.length) {
    for(let i=0; i < s1.length; i++) {
      if(s1[i] != s2[i]) count++;
    }
    if(count > 1) return false;
    return true;
  }

  [sStr,lStr] = (s1.length > s2.length) ? [sStr,lStr] = [s2,s1] : [sStr,lStr] = [s1,s2];

  for(let i=0; i < lStr.length; i++) {
    if(sStr[i] != lStr[i]) {
      if(lStr.slice(i+1) === sStr.slice(i)) {
        result = true;
        break;
      } else break;
    }
  }
  return result;
  
}
// works, but is hideous, REFACTOR
function oneCharDifference(s1, s2) {
  // your code here
  let sStr = '';
  let lStr = '';
  let count = 0;
  let result = false;
  console.log("s1: " + s1);
  console.log("s2: " + s2);
  if (s1 === s2) return false;
  if(s1.length < s2.length - 1 || s1.length > s2.length + 1) return false;
  

  if(s1.length === s2.length) {
    for(let i=0; i < s1.length; i++) {
      if(s1[i] != s2[i]) count++;
    }
    if(count > 1) return false;
    return true;
  }

  [sStr,lStr] = (s1.length > s2.length) ? [sStr,lStr] = [s2,s1] : [sStr,lStr] = [s1,s2];

  console.log("sStr: " + sStr);
  console.log("lStr: " + lStr);

  // longer, so s2 has letter removed
  if(s1.length > s2.length) {
    for(let i=0; i < s1.length; i++) {
      if(s1[i] != s2[i]) {
        console.log(s1.slice(i+1))
        console.log(s2.slice(i));
        if(s1.slice(i+1) === s2.slice(i)) {
          result = true;
          break;
        } else break;
      }
    }
    return result;
    // shorter, so s2 has letter added
  } else {
    for(let i=0; i < s2.length; i++) {
      if(s1[i] != s2[i]) {
        console.log(s2.slice(i+1))
        console.log(s1.slice(i));
        if(s2.slice(i+1) === s1.slice(i)) {
          result = true;
          break;
        } else break;
      }
    }
    return result;
    
  }
  
}



////////////////////////////////////////////////////////////////////
// scratch
function oneCharDifference(s1, s2) {
  let sStr = '', lStr = '', count = 0, result = false;
  // let lStr = '';
  // let count = 0;
  // let result = false;
  if (s1 === s2) return false;
  if(s1.length < s2.length - 1 || s1.length > s2.length + 1) return false;

  if(s1.length === s2.length) {
    for(let i=0; i < s1.length; i++) {
      if(s1[i] != s2[i]) count++;
    }
    if(count > 1) return false;
    return true;
  }

  [sStr,lStr] = (s1.length > s2.length) ? [sStr,lStr] = [s2,s1] : [sStr,lStr] = [s1,s2];

  for(let i=0; i < lStr.length; i++) {
    if(sStr[i] != lStr[i]) {
      if(lStr.slice(i+1) === sStr.slice(i)) {
        result = true;
        break;
      } else break;
    }
  }
  return result;
  
}





function count (string) {  
  // The function code should be here
  let obj = {};
  // console.log( string.split('').reduce((myObj,v) => myObj[v] = (myObj[v] || 1) + 1 ,{}) );
  // console.log( string.split('').reduce((a,v) => a += v, '')  );
  string.split('').forEach(e => obj[e] = (obj[e] || 0) + 1 );

  return obj;
}

function count (string) {  
  return string.split('').reduce(function(obj,val){
      obj[val] = (obj[val] + 1) || 1;
      return obj;
  },{});
}

function count (string) {  
  return string.split('').reduce((obj,val) => (obj[val] = (obj[val] + 1) || 1) ? obj : obj, {});
}


