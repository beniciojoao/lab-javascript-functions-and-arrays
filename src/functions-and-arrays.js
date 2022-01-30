//DONE
console.log('DAY 03 - 15/01/2022');
console.log('LAB | JS Functions and Arrays');
console.log('Author: João Benício Straehl');
//DONE

//DONE
console.log('----------------------------------------');
//DONE


// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.
function maxOfTwoNumbers(  num1, num2 ) {
    return Math.max( num1, num2 );
 }
 console.log(maxOfTwoNumbers( 18, 9 ));


// Iteration #2: Find the longest word
// Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.
// You can use the following array to test your solution:
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arrOfWords) {
  if (!arrOfWords.length) return null;
  if (arrOfWords.length === 1) return arrOfWords[0];
  let largestWord = arrOfWords[0];

  for (let word of arrOfWords) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }
  return largestWord;
}

// Iteration #3: Calculate the sum
// Calculating a sum can be as simple as iterating over an array and adding each of the elements together.
// Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice "declarative" way adding values, using loops.
// You can use the following array to test your solution:
// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  // if (numbers.length === 0) return 0;
  let temp = 0;
  for (let number of numbers) {
    temp += number;
  }
  return temp;
}



// Bonus - Iteration #3.1: A generic sum() function
// The goal: Learn how to refactor your code. 💪
// In the iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know how much is the sum of the length of all of the words in an array? What if we wanted to add boolean values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to tweak it a little bit so that it can be reused no matter what is in the array that is passed as argument when function sumNumbers() is called.
// Here we are applying a concept we call polymorphism, that is, dealing with a functions' input independently of the types they are passed as.
// Let's implement the function sum() that calculates the sum for array filled with (almost) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.
// You can use the following array to test your solution:
// const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 57



// Iteration #4: Calculate the average
// Calculating an average is an extremely common task. Let's practice it a bit.
// The logic behind this:
// Find the sum as we did in the first exercise (or how about reusing that the sumNumbers()?)
// Take that sum and divide it by the number of elements in the list.
// Level 1: Array of numbers
// Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers:
// You can use the following array to test your solution:
// const numbers = [2, 6, 9, 10, 7, 4, 1, 9];

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers) {
    if (!numbers.length) return null;
    else return sumNumbers(numbers) / numbers.length;
   
  }

// Level 2: Array of strings
// Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words:
// You can use the following array to test your solution:
// const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const averageWordLength = words => {
    if (!words.length) return null;
    return words.join('').length / words.length;
  };



  // Bonus - Iteration #4.1: A generic avg() function
// Create function avg(arr) that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans. We are following a similar logic to the one applied on the bonus iteration 4.1. 😉
// const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 5.7


// Iteration #5: Unique arrays
// Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the indexOf Array method.
// Do this in the form of a function uniquifyArray that receives an array of words as a argument.
// You can use the following array to test your solution:
// const words = [
//   'crab',
//   'poison',
//   'contagious',
//   'simple',
//   'bring',
//   'sharp',
//   'playground',
//   'poison',
//   'communion',
//   'simple',
//   'bring'
// ];

const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  
  const uniquifyArray = words => {
    if (!words.length) return null;
    let uniqueArr = [];
    for (let word of words) {
      if (!uniqueArr.includes(word)) uniqueArr.push(word);
    }
    return uniqueArr;
  };
  



// Iteration #6: Find elements
// Let's create a simple array search.
// Declare a function named doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise, return false. Don't use indexOf for this one.
// You can use the following array to test your solution:
// const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(arr, word) {
    if (arr.length === 0) return null;
    return arr.includes(word);
  }
  

// Iteration #7: Count repetition
// Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.
// You can use the following array to test your solution:
// const words = [
//   'machine',
//   'matter',
//   'subset',
//   'trouble',
//   'starting',
//   'matter',
//   'eating',
//   'matter',
//   'truth',
//   'disobedience',
//   'matter'
// ];

const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  
  function howManyTimes(arr, word) {
    let count = 0;
    for (let el of arr) {
      if (el === word) count++;
    }
    return count;
  }
  




// Bonus - Iteration #8: Product of adjacent numbers
// What is the greatest product of four adjacent numbers? We consider adjacent any four numbers that are next to each other horizontally or vertically.
// For example, if we have a 5x5 Matrix like:
// [ 1,  2, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1,  4, 3, 4, 5]
// The greatest product will be the 20x20x20x4 = 32000.
// Declare a function named greatestProduct(matrix) to find it in the 20×20 grid below!
// const matrix = [
//   [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
//   [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
//   [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
//   [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
//   [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
//   [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
//   [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
//   [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
//   [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
//   [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
//   [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
//   [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
//   [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
//   [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
//   [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
//   [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
//   [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
//   [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
//   [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
//   [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
// ];

// Bonus - Iteration #8.1: Product of diagonals
// Following the logic you've used in iteration #8, declare a function called greatestProductOfDiagonals(matrix). It takes a matrix as a parameter and returns the greatest product of any four values layed out diagonally, in either direction.
