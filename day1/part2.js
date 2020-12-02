/*
--- Day 1: Report Repair ---
In your expense report, what is the product of the three entries that sum to 2020?
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
  for (let i = 0; i < arr.length - 1; i++) {
    const num1 = parseInt(arr[i], 10);

    if (answer) break;

    // Loop through every other element in input list
    for (let j = i + 1; j < arr.length; j++) {
      const num2 = parseInt(arr[j], 10);
      const difference = sum - (num1 + num2);

      // If current number exists in map -> match
      // match = current number and the pair stored at remainders[current number]
      if (remainders[num1]) {
        console.log('Three entries:', num1, remainders[num1][0], remainders[num1][1]);
        answer = num1 * remainders[num1][0] * remainders[num1][1];
        break;
      }

      // If difference does not exist in map,
      // store the difference and the current number
      if (!remainders[difference]) remainders[difference] = [num1, num2];
    }
  }

  // answer is the product of three numbers
  return answer;
}

function sumYear(year) {
  // Parse input into array
  const nums = parseInput();

  // Return product of the three entries
  return product(nums, year);
}

const answer = sumYear(2020);
console.log('Product:', answer);
