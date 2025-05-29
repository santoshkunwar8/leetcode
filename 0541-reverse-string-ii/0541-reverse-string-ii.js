/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const arrString = s.split("");
    
  for (let i = 0; i < arrString.length; i += k * 2) {
    let left = i;
    let right = Math.min(i + k - 1, arrString.length - 1);

    while (left < right) {
      [arrString[left], arrString[right]] = [arrString[right], arrString[left]];
      left++;
      right--;
    }
  }

  return arrString.join("");
};