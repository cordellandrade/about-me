'use strict';

console.log('Hello 201!');

var userName = prompt('Hello, what is your name?');
// console.log(userName);
alert(`Hello ${userName}, nice to meet you!`);

var answerOne = prompt('Do I live in the US?').toLowerCase();
// console.log(answerOne);

if (answerOne === 'yes' || answerOne === 'y') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
} else if (answerOne === 'no' || answerOne === 'n') {
    // console.log('You are correct!')
    alert('You are correct!')
};

var answerTwo = prompt('Did I live in the US before?').toLowerCase();
// console.log(answerTwo);

if (answerTwo === 'yes' || answerTwo === 'y') {
    // console.log('You are correct!')
    alert('You are correct!')
} else if (answerTwo === 'no' || answerTwo === 'n') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
};

var answerThree = prompt('Do I enjoy sports?').toLowerCase();
// console.log(answerThree);

if (answerThree ===
    'yes' || answerThree ===
    'y') {
    // console.log('You are correct!')
    alert('You are correct!')
} else if (answerThree ===
    'no' || answerThree ===
    'n') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
};

var answerFour = prompt('Do I love dogs?').toLowerCase();
// console.log(answerFour);

if (answerFour === 'yes' || answerFour === 'y') {
    // console.log('You are correct!')
    alert('You are correct!')
} else if (answerFour === 'no' || answerFour === 'n') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
};

var answerFive = prompt('Is Star Wars one of my favorite trilogies?').toLowerCase();
// console.log(answerFive);

if (answerFive === 'yes' || answerFive === 'y') {
    // console.log('You are correct!')
    alert('You are correct!')
} else if (answerFive === 'no' || answerFive === 'n') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
};

alert(`Thank you ${userName} for visiting my website :)`);