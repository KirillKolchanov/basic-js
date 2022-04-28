const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(array) {
   if (!Array.isArray(array)) {
    return false;
   }
   let counter = 0;
   for (let i = 0; i < array.length; i++) {
     if (typeof array[i] === 'string') {
       counter++;
     }
   }
   if (counter === 0) {
     return false;
   }
  return array
          .filter(elem => typeof elem === "string")
  				.map(elem => elem.trim().toUpperCase())
          .map(elem => elem.slice(0,1))
          .sort()
          .join("")
}

module.exports = {
  createDreamTeam
};
