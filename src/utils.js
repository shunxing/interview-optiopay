const mapRomanToNum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const toRoman = num => {
  let numberCopy = num;

  return Object.keys(mapRomanToNum).reduce((acc, romanNumber) => {
    while (numberCopy >= mapRomanToNum[romanNumber]) {
      numberCopy = numberCopy - mapRomanToNum[romanNumber];
      acc = acc + romanNumber;
    }
    return acc;
  }, "");
};

const fromRoman = romanNumber => {
  let sum = [];
  for (let i = 0; i < romanNumber.length; i++) {
    if (mapRomanToNum[romanNumber[i]] > mapRomanToNum[romanNumber[i - 1]]) {
      sum[i - 1] =
        mapRomanToNum[romanNumber[i]] - mapRomanToNum[romanNumber[i - 1]];
    } else {
      sum[i] = mapRomanToNum[romanNumber[i]];
    }
  }

  return sum.reduce((a, b) => a + b, 0) || "";
};
export const RomanNumerals = { toRoman, fromRoman };

const isRomanNumberValid = number => {
  return (
    number.search(
      /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/g
    ) !== -1
  );
};

const isArabicNumberValid = number => {
  return number > 0 && number < 4000;
};

export const validator = { isRomanNumberValid, isArabicNumberValid };
