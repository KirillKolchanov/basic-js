const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    const i = position - 1;
    if (this.arr[i] === undefined) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.arr.splice(i, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = this.arr.join("~~");
    this.arr = [];
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
