const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 function encodeLine(str) {
  const encodedStr = []
  let counter = 0;

  for (let i = 0; i < str.length; i++) {

    counter += 1;

    if (str[i] !== str[i + 1]) {
    	if (counter === 1) {
      	encodedStr.push(str[i])
        counter = 0;
        continue;
      }
      encodedStr.push(counter+str[i])
      counter = 0
    }
  }

  return encodedStr.join("");
}

module.exports = {
  encodeLine
};
