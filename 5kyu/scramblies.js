// 5 kyu Scramblies
//
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// Notes:
//
//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.
//
// Examples
//
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
//
// Answer:
function scramble(str1, str2) {
  const c1Obj = str1.split("").reduce((a, e) => (a[e] ? a[e]++ : (a[e] = 1), a), {});
  const c2Obj = str2.split("").reduce((a, e) => (a[e] ? a[e]++ : (a[e] = 1), a), {});

  return Object.keys(c2Obj).every((e) => {
    if (c2Obj[e] <= c1Obj[e]) {
      return true;
    } else return false;
  });
}

// Trying different methods below, all seem the same time complexity as the solution above.

function scramble2(str1, str2) {
  let obj2 = {};
  for (let i = 0; i < str2.length; i++) {
    if (obj2[str2[i]]) obj2[str2[i]]++;
    else obj2[str2[i]] = 1;
  }

  let obj1 = {};
  for (let i = 0; i < str1.length; i++) {
    if (obj2[str1[i]]) {
      if (obj1[str1[i]]) obj1[str1[i]]++;
      else obj1[str1[i]] = 1;
    }
  }

  return Object.keys(obj2).every((e) => {
    if (obj2[e] <= obj1[e]) {
      return true;
    } else return false;
  });
}

function scramble3(str1, str2) {
  const characterCounts = {};
  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];
    if (char2) {
      if (!characterCounts[char2]) {
        characterCounts[char2] = 1;
      } else {
        characterCounts[char2] = characterCounts[char2] + 1;
      }
    }
    if (char1) {
      if (characterCounts[char1]) {
        characterCounts[char1] = characterCounts[char1] - 1;
      } else {
        characterCounts[char1] = -1;
      }
    }
  }

  return Object.values(characterCounts).every((e) => e < 1);
}
