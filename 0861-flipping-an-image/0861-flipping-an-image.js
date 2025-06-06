/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (const row of image) {
    let i = 0;
    let j = row.length - 1;

    while (i <= j) {
      if (i === j) {
        row[i] = row[i] ^ 1;
      } else {
        let temp = row[i] ^ 1;
        row[i] = row[j] ^ 1;
        row[j] = temp;
      }
      j--;
      i++;
    }
  }

  return image;
};