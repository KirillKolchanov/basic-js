const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {

  constructor(value) {
    if (value === false) {
      this.direct = value;
    } else {
      this.direct = true;
    }
    this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }

  setKeyLength(message, key) {
    let count = 0;
    return message.toUpperCase().split('').map((letter) => {
      if (this.alphabet.includes(letter)) {
        return key[count++ % key.length].toUpperCase();
      } else {
        return letter;
      }
    })
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const newKey = this.setKeyLength(message, key);
    const result = [];

    message.toUpperCase().split('').forEach((letter, i) => {
      if (this.alphabet.includes(letter)) {
        let j = (this.alphabet.indexOf(letter) + this.alphabet.indexOf(newKey[i])) % 26;
        result.push(this.alphabet[j]);
      } else {
        result.push(letter);
      }
    })

      if (this.direct) {
        return result.join('');
      } else {
        return result.reverse().join('');
      }
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const newKey = this.setKeyLength(message, key);
    const result = [];

    message.toUpperCase().split('').forEach((letter, i) => {
      if (this.alphabet.includes(letter)) {
        let j = this.alphabet.indexOf(letter) - (this.alphabet.indexOf(newKey[i]) % 26);
        if (j < 0) {
          j = 26 + j;
        }
        result.push(this.alphabet[j]);
      } else {
        result.push(letter);
      }
    })

    if (this.direct) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
