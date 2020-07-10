// import functions and grab DOM elements
import compareNumbers from './numberUtils.js';

const myGuess = document.querySelector('#guess');
const myButton = document.querySelector('#button');
const winLose = document.querySelector('#win-lose');
const highLow = document.querySelector('#high-low');
const reset = document.querySelector('#reset');
/*const triesRemaining = document.querySelector('#tries-remaining');
^^ could potentially use for remaining number of guesses*/

console.log(myGuess, myButton, winLose, highLow, reset);

// initialize state
let triesRemaining = 4;

// set event listeners to update state and DOM

const 