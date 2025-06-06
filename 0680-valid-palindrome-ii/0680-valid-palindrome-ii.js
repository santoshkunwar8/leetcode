function isPalindromeRange(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
      let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindromeRange(s, left + 1, right) ||
        isPalindromeRange(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
return true;
};