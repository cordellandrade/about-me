'use strict';

console.log('Hello 201!');

var userPoints = 0;

var userName = prompt('Hello, what is your name?'); // {
//     while (!userName) {
//         userName = prompt('What is your name? Really, we need it.');
//     }
// console.log(userName);
alert(`Hello ${userName}, nice to meet you!`);
// };


function answerOne() {
prompt('Do I live in the US?').toLowerCase(); 
// console.log(answerOne);

    if (answerOne === 'yes' || answerOne === 'y') {
        // console.log('You are wrong, sorry.')
        alert('You are wrong, sorry.')
    } else if (answerOne === 'no' || answerOne === 'n') {
        // console.log('You are correct!')
        alert('You are correct!')
        userPoints++;
    }
}

answerOne();

function answerTwo() {
prompt('Did I live in the US before?').toLowerCase(); 
// console.log(answerTwo);

    if (answerTwo === 'yes' || answerTwo === 'y') {
        // console.log('You are correct!')
        alert('You are correct!')
        userPoints++;
    } else if (answerTwo === 'no' || answerTwo === 'n') {
        // console.log('You are wrong, sorry.')
        alert('You are wrong, sorry.')
    }
}

answerTwo();

function answerThree() {
prompt('Do I enjoy sports?').toLowerCase(); 
// console.log(answerThree);

    if (answerThree ===
        'yes' || answerThree ===
        'y') {
        // console.log('You are correct!')
        alert('You are correct!')
        userPoints++;
    } else if (answerThree ===
        'no' || answerThree ===
        'n') {
        // console.log('You are wrong, sorry.')
        alert('You are wrong, sorry.')
    }
}

answerThree();

function answerFour() {
prompt('Do I love dogs?').toLowerCase(); 
// console.log(answerFour);

    if (answerFour === 'yes' || answerFour === 'y') {
        // console.log('You are correct!')
        alert('You are correct!')
        userPoints++;
    } else if (answerFour === 'no' || answerFour === 'n') {
        // console.log('You are wrong, sorry.')
        alert('You are wrong, sorry.')
    }
}

answerFour();

function answerFive() {
prompt('Is Star Wars one of my favorite trilogies?').toLowerCase(); 
// console.log(answerFive);

    if (answerFive === 'yes' || answerFive === 'y') {
        // console.log('You are correct!')
        alert('You are correct!')
        userPoints++;
    } else if (answerFive === 'no' || answerFive === 'n') {
        // console.log('You are wrong, sorry.')
        alert('You are wrong, sorry.')
    }
}

answerFive();

alert(`Thank you ${userName} for visiting my website :)`);

alert('Welcome to my guessing game!');

function answerSix() {

var tries = 0;
var guessNumber = 7;
var correctGuess = false;

while (tries < 3 && !correctGuess) {
    tries++;
    //parseInt = + or +prompt //
    var guessGame = +prompt('I\'m thinking of a number from 1 - 10, can you guess the number?');
    // console.log(typeof guessGame, guessGame);
    if (guessGame < guessNumber) {
        alert(`Sorry ${userName} that guess is too low`)
    } else if (guessGame > guessNumber) {
        alert(`Sorry ${userName} that guess is too high`)
    } else if (guessGame === 7) {
        alert(`Correct ${userName} !`)
        correctGuess = true;
        userPoints++;
    }


    if (!correctGuess) {
        alert(`
        You 're out of guesses, the correct one was  ${guessNumber}`);
    }
}
}
answerSix();


function answerSeven() {

var whatMovie = ['the matrix', 'star wars the return of the sith', 'inception', 'the departer']
var guessAnswer = prompt(' Can you guess what movie is my favorite?').toLowerCase();
var attemptsRemaining = 6;
var answeredCorrect = false;

while (attemptsRemaining > 0 && !answeredCorrect) {
    attemptsRemaining--;
    for (var i = 0; i < whatMovie.length; i++) {
        if (guessAnswer === whatMovie[i]) {
            answeredCorrect = true;
            userPoints++;
            alert(`My favorite movie to watch is ${guessAnswer}.`);

        }
    }
    if (attemptsRemaining > 0 && !answeredCorrect) {
        guessAnswer = prompt('Sorry that wasn\'t a correct answer please try again!');
    }
    if (attemptsRemaining === 0 && !answeredCorrect) {
        alert('Sorry you\'re out of tries!');
    }


}

if (!answeredCorrect) {
    alert(`Thanks for playing, ${userName}, the correct answer was the matrix :)`)
}
}
answerSeven();

alert('you have ' + userPoints + ' points.');