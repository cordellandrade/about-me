'use strict';

console.log('Hello 201!')

var userPoints = 0;

var userName = prompt('Hello, what is your name?')
alert(`Hello ${userName}, nice to meet you!`)



function answerOne() {
    var response = prompt('Do I live in the US?').toLowerCase()

    if (response === 'yes' || response === 'y') {

        alert('You are wrong, sorry.');
    } else if (response === 'no' || response === 'n') {

        alert('You are correct!')
        userPoints++;
    }
}

answerOne();

function answerTwo() {
    var response = prompt('Did I live in the US before?').toLowerCase();

    if (response === 'yes' || response === 'y') {
        alert('You are correct!')
        userPoints++;
    } else if (response === 'no' || response === 'n') {
        alert('You are wrong, sorry.')
    }
}


answerTwo();

function answerThree() {
    var respone = prompt('Do I enjoy sports?').toLowerCase();

    if (respone === 'yes' || respone === 'y') {
        alert('You are correct!')
        userPoints++;
    } else if (respone === 'no' || respone === 'n') {
        alert('You are wrong, sorry.')
    }
}

answerThree();

function answerFour() {
    var response = prompt('Do I love dogs?').toLowerCase();

    if (response === 'yes' || response === 'y') {
        alert('You are correct!')
        userPoints++;
    } else if (response === 'no' || response === 'n') {
        alert('You are wrong, sorry.')
    }
}

answerFour();

function answerFive() {
    var response = prompt('Is Star Wars one of my favorite trilogies?').toLowerCase();

    if (response === 'yes' || response === 'y') {
        alert('You are correct!')
        userPoints++;
    } else if (response === 'no' || response === 'n') {
        alert('You are wrong, sorry.')
    }
}

answerFive();

alert('Welcome to my guessing game!');


function answerSix() {
    var tries = 0;
    var guessNumber = 7;
    var correctGuess = false;

    while (tries < 3 && !correctGuess) {
        tries++;
        var guessGame = parseInt(prompt('I\'m thinking of a number from 1 - 10, can you guess the number?'));
        if (guessGame < guessNumber) {
            alert(`Sorry ${userName} that guess is too low`)
        } else if (guessGame > guessNumber) {
            alert(`Sorry ${userName} that guess is too high`)
        } else if (guessGame === 7) {
            alert(`Correct ${userName} !`)
            correctGuess = true;
            userPoints++;
        }
    }

    if (!correctGuess) {
        alert(`You 're out of guesses, the correct one was  ${guessNumber}`);
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