const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(array) {

  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--double-next') {
      if (array[i + 1] === undefined) {
        continue;
      } else {
      newArr.push(array[i + 1]);
      }
    } else if (array[i] === '--discard-prev') {
      newArr.pop();
    } else if (array[i] === '--double-prev') {
      if (array[i - 1] === undefined) {
      } else {
      newArr.push(array[i - 1]);
      }
    } else if (array[i] === '--discard-next') {
      i += 2;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}


module.exports = {
  transform
};
