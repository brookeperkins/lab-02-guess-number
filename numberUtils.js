export function randomNumber() {
    Math.ceil(Math.random() * 20);
}

export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0; 
        // alert('You win!');
    } else if (guess < correctNumber) {
        return -1;
        // alert('That number is too low!');
    } else if (guess > correctNumber) {
        return 1;
        // alert('That number is too high!);
    }
    
}

export function highOrLow() {
    if (result === 0) {
        return ('You\'re a winner!');
    } else if (result === -1) {
        return ('That\'s too low!');
    } else if (result === 1) {
        return ('That\'s too high!');
    }
}
