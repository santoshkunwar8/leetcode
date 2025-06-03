    
function getNext(n) {
  let total = 0;

  while (n > 0) {
    let lastNumber = n % 10;
    total += Math.pow(lastNumber, 2);
    n = Math.floor(n / 10);
  }
  return total;
}


/**
 * @param {number} n
 * @return {boolean}
 */
 
var isHappy = function(n) {
      let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
};