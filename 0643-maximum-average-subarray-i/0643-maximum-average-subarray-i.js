/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
      let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let windowsSum = maxSum;

  for (let i = k; i < nums.length; i++) {
    windowsSum = windowsSum - nums[i - k] + nums[i];
    if (windowsSum > maxSum) {
      maxSum = windowsSum;
    }
  }

  return maxSum / k;
};