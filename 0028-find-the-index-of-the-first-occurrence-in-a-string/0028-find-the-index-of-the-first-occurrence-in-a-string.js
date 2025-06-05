/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let hLen = haystack.length;
  let nLen = needle.length;

  if (nLen > hLen) return -1;

  for (let i = 0; i <= hLen - nLen; i++) {
    if (haystack.substring(i, i + nLen) === needle) {
      return i;
    }
  }

  return -1;
};