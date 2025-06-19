/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const windows = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (windows.has(nums[i])) {
      return true;
    }

    windows.add(nums[i]);

    if (windows.size > k) {
      windows.delete(nums[i - k]);
    }
  }
  return false;
};