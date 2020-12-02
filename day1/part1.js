/*
--- Day 1: Report Repair ---
Find the two entries that sum to 2020 and then multiply those two numbers together.
*/
const fs = require('fs');

function parseInput() {
  const text = fs.readFileSync('./input.txt').toString('utf-8');
  const textByLine = text.split('\n');
  return textByLine;
}

function product(arr, sum) {
  // Initialize map to store { remainder: current number }
  // Store answer
  const remainders = {};
  let answer;

  // Loop through every element in input list
  for (let i = 0; i < arr.length; i++) {
    const num = parseInt(arr[i], 10);

    // If current number exists in map -> match
    // match = current number and value of remainders[current number]
    if (remainders[num]) {
      console.log('Two entries:', num, remainders[num]);
      answer = num * remainders[num];
      break;
    }

    // If difference does not exist in map,
    // store the difference and the current number
    if (!remainders[sum - num]) remainders[sum - num] = num;
  }

  // answer is the two numbers multiplied
  return answer;
}

function sumYear(year) {
  // Parse input into array
  const nums = parseInput();

  // Return product of the two entries
  return product(nums, year);
}

const answer = sumYear(2020);
console.log('Product:', answer);
