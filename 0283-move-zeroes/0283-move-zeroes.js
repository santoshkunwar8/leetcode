/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex++] = nums[i];
    }
  }

  for (let j = lastNonZeroIndex; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
};