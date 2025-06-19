/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
 
const freqMap = new Map();
  let lhs = 0;

  for (let n of nums) {
    freqMap.set(n, (freqMap.get(n) || 0) + 1);
  }

  for (let [num, count] of freqMap) {
    if (freqMap.has(num + 1)) {
      lhs = Math.max(lhs, count + freqMap.get(num + 1));
    }
  }
  return lhs;
};