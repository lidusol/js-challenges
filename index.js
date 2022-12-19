// Import stylesheets
import './style.css';

// Reverse String
function reverseString(str) {
  return str.split('').reverse().join('');
}
const testReverse = 'abcd';
console.log(reverseString(testReverse));

// Check palindrome
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  const strArray = str.split('');
  const reversedArray = reversedStr.split('');

  // if (strArray.length !== reversedArray.length) return false;
  // else return strArray.every((str, i) => reversedArray[i] === str);
  return reversedStr === str;
}
const testPalindrome = 'racecar';
console.log(isPalindrome(testPalindrome));

// Reverse Number
function reverseInt(int) {
  const reversedInt = int.toString().split('').reverse().join('');
  return Number.parseInt(reversedInt) * Math.sign(int);
}

const testIntReverse = -123;
console.log(reverseInt(testIntReverse));

// Capitalize sentence
function capitalizeLetters(str) {
  return str
    .split(' ')
    .map((str) => str.substring(0, 1).toUpperCase().concat(str.substring(1)))
    .join(' ');
}

const testCapitalize = 'I love javascript';
console.log(capitalizeLetters(testCapitalize));

// Find max character
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').map((char) => {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  });
  console.log(charMap);
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

const testMaxChar = 'Javascript library';
console.log(maxCharacter(testMaxChar));

// FizzBuzz (Print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5 & 'FizzBuzz' for multiples of both)
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz());

// Longest word
function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
}

const testLongestWord1 = 'Hi, I am Lydia.';
const testLongestWord2 = "Hello there, it's Lydia here.";
console.log(longestWord(testLongestWord2));

// Chunk array
function chunkArray(arr, len) {
  const chunkedArr = [];

  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }

  arr.forEach((val) => {});

  return chunkedArr;
}

const testArray = [1, 3, 5, 43, 78, 4, 100, 4, 52];
const testLen = 3;
console.log(chunkArray(testArray, testLen));

// Flatten array
function flattenArray(arrays) {
  // Solution 1
  // return arrays.flatMap(val => val)

  // Solution 2
  // const flatArr = [];
  // arrays.forEach((arr) => arr.forEach((val) => flatArr.push(val)));
  // return flatArr;

  // Solution 3
  return [].concat(...arrays);
}

const testFlattenArray = [
  [1, 3, 4],
  [5, 6, 7],
  [8, 9],
];
console.log(flattenArray(testFlattenArray));
