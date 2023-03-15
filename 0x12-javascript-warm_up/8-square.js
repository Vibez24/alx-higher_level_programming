#!/usr/bin/node

/**
 * prints a square
 */
const userInput = parseInt(process.argv[2]);
let squareMaker = '';

if (process.argv.length < 3 || isNaN(userInput)) {
  console.log('Missing size');
}
for (let i = 0; i < userInput; i++) {
  for (let j = 0; j < userInput; j++) {
    squareMaker += 'X';
  }
  if (i !== userInput - 1) {
    squareMaker += '\n';
  }
}
console.log(squareMaker);
