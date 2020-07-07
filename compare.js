export default function compareNumbers(guess, correctNumber) {
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