function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

class Calc {
  constructor() {}
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  divide(a, b) {
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
}

function caesarCipher(word, shift = 0) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  let plain = "abcdefghijklmnopqrstuvwxyz";
  plain = plain.split("");
  let cipher = "bcdefghijklmnopqrstuvwxyza";
  cipher = cipher.split("");
  word = word.split("");

  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    if (regex.test(word[i])) {
      newWord += word[i];
      continue;
    }

    let letterIndex = plain.indexOf(word[i]);
    newWord += cipher[letterIndex + shift];
  }

  return newWord;
}

function analyseArray(array) {
  let total = array.reduce((sum, element) => sum + element, 0);
  let average = total / array.length;

  return {
    average: average,
    min: Math.min(array),
    max: Math.max(array),
    length: array.length,
  };
}

module.exports = {
  capitalise,
  reverseString,
  Calc,
  caesarCipher,
  analyseArray,
};
