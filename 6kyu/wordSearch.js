// 6 kyu Word search
//
// Yet another easy kata!
// Task:
//
// You are given a word target and list of sorted(by length(increasing), number of upper case
// letters(decreasing), natural order) unique words words which always contains target, your task
// is to find the index(0 based) of target in words,which would always be in the list.
//
// Examples:
//
// words = ['JaCk', 'Jack', 'jack', 'jackk', 'COdewars', 'codeWars', 'abcdefgh', 'codewars']
// '''
// (list is sorted by length(small to big), then by number of uppercase letters(maximum to minimum) and then by natural order)
// '''
// target = 'codewars'
// #result should be 7
//
// #Another example:
// words = ['cP', 'rE', 'sZ', 'am', 'bt', 'ev', 'hq', 'rx', 'yi', 'akC', 'nrcVpx', 'iKMVqsj']
// target = 'akC'
// #result should be 9
//
// Constraints:
//
//     python
//         4 < len(words) <= 200000
//         1 < len(search) <= 10
//         Number of random tests are around 6000.
//         Reference solution passes in 8s.
//     Javascript
//         Your solution must pass in less than ref.solution+10ms speed.
//         This is because generating long list of unique words in js is slow.
//         If you think you've got an correct approach and timing test is not passing then submit again.
//
// Answer:
function indexOf(words, target) {
  let len = target.length;
  let cCount = (target.match(/[A-Z]/g) || []).length;
  let start = 0;
  let end = words.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (words[mid] === target) return mid;
    let tmpCount = (words[mid].match(/[A-Z]/g) || []).length;
    if (words[mid].length < len) {
      start = mid + 1;
    } else if (words[mid].length > len) {
      end = mid - 1;
    } else if (tmpCount < cCount) {
      end = mid - 1;
    } else if (tmpCount > cCount) {
      start = mid + 1;
    } else if (words[mid] < target) {
      start = mid + 1;
    } else if (words[mid] > target) {
      end = mid - 1;
    }
  }
}
