/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let counter = 0;
  do {
    if (num == 0) {
      return counter;
    } else if (num % 2 == 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    counter += 1;
  } while (num != 0);
  return counter;
};
