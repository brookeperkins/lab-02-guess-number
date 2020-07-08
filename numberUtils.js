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

export function randomNumber() {
    Math.ceil(Math.random() * 20);
}

// export function highOrLow() {} <-- could potentially be used for alert.