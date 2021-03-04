import { compareNumbers } from './numberUtils.js';

const gameBox = document.getElementById('game-box');
const userGuess = document.getElementById('user-guess');
const playButton = document.getElementById('play-button');
const guessBox = document.getElementById('guesses');
const feedback = document.getElementById('feedback-box');
const resetBox = document.getElementById('reset-box');
const resultDisplay = document.getElementById('results-display');
const resetButton = document.getElementById('reset-button');

let guessesRemaining = 4;
let numberOfGuesses = 0;
let randomNumber = Math.ceil(Math.random() * 20);

resetBox.style.display = 'none';
guessBox.textContent = guessesRemaining;

playButton.addEventListener('click', () => {
    const userGuessNumber = userGuess.valueAsNumber;
    feedback.style.display = 'block';
    
    if (userGuessNumber > 20) {
        alert(`Nice try, but guesses should be below 20!`);
        return;
    }
    
    if (compareNumbers(randomNumber, userGuessNumber) === 1) {
        guessesRemaining--;
        numberOfGuesses++;
        feedback.textContent = `That's too low, Cee-Lo!`;
        guessBox.textContent = guessesRemaining;
        
    } else if (compareNumbers(randomNumber, userGuessNumber) === -1) {
        guessesRemaining--;
        numberOfGuesses++;
        feedback.textContent = `Too high, Lady Di!`;
        guessBox.textContent = guessesRemaining;
        
    } else if (compareNumbers(randomNumber, userGuessNumber) === 0) {
        numberOfGuesses++;
        gameBox.style.display = 'none';
        resetBox.style.display = 'flex';
        resultDisplay.textContent = `You got it! And it only took ${numberOfGuesses} guesses!`;
        guessBox.textContent = guessesRemaining;
    }
    
    if (guessesRemaining === 0) {
        gameBox.style.display = 'none';
        resetBox.style.display = 'flex';
        resultDisplay.textContent = `It wasn't meant to be. 😔`;
        guessBox.textContent = guessesRemaining;
    }
});

resetButton.addEventListener('click', () => {
    resetBox.style.display = 'none';
    gameBox.style.display = 'flex';
    feedback.style.display = 'none';
    
    guessesRemaining = 4;
    numberOfGuesses = 0;
    randomNumber = Math.ceil(Math.random() * 20);
    
    guessBox.textContent = guessesRemaining;
    feedback.textContent = '';
    userGuess.value = '';
});
