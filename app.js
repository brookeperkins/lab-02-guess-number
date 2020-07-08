// import functions and grab DOM elements
import compareNumbers from './compare.js';

const myGuess = document.querySelector('#guess');
const myButton = document.querySelector('#button');
const guessWas = document.querySelector('#guess-was');
const winLose = document.querySelector('#win-lose');
const triesRemaining = document.querySelector('#tries-remaining');
const reset = document.querySelector('#reset');

console.log(myGuess, myButton, guessWas, winLose, triesRemaining, reset);

// initialize state
let triesLeft = 4;

// set event listeners to update state and DOM