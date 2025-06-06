function getLastIndexOfUniqueElm(arr) {
  let j = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] !== arr[i + 1]) {
      arr[j++] = arr[i];
    }
  }

  return j;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const index = getLastIndexOfUniqueElm(nums);
  return index;
};