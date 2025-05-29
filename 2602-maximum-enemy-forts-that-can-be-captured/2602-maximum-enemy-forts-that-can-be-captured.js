/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
  let maxCapturedForts = 0;
  let prev = -1;

  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === -1 || forts[i] === 1) {
      if (prev !== -1 && forts[i] !== forts[prev]) {
        const zerosInBetween = Math.abs(prev - i) - 1;
        maxCapturedForts = Math.max(maxCapturedForts, zerosInBetween);
      }

      prev = i;
    }
  }
  return maxCapturedForts;
};