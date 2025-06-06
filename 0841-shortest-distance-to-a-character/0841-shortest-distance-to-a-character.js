/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const n = s.length;
  let cIndex = -Infinity;

  let result = new Array(n);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      cIndex = i;
    }

    result[i] = Math.abs(i - cIndex);
  }
  cIndex = Infinity;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      cIndex = i;
    }
    result[i] = Math.min(result[i], Math.abs(i - cIndex));
  }


  return result;
};