'use strict';

console.log('Hello 201!');

var userName = prompt('Hello, what is your name?');
// console.log(userName);
alert(`Hello ${userName}, nice to meet you!`);

var questionOne = prompt('Do I live in the US?').toLowerCase();
// console.log(questionOne);

if (questionOne === 'yes' || questionOne === 'y') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
} else if (questionOne === 'no' || questionOne === 'n') {
    // console.log('You are correct!')
    alert('You are correct!')
};

var questionTwo = prompt('Did I live in the US before?').toLowerCase();
// console.log(questionTwo);

if (questionTwo === 'yes' || questionTwo === 'y') {
    // console.log('You are correct!')
    alert('You are correct!')
} else if (questionTwo === 'no' || questionTwo === 'n') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
};

var questionThree = prompt('Do I enjoy sports?').toLowerCase();
// console.log(questionThree);

if (questionThree === 'yes' || questionThree === 'y') {
    // console.log('You are correct!')
    alert('You are correct!')
} else if (questionThree === 'no' || questionThree === 'n') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
};

var questionFour = prompt('Do I love dogs?').toLowerCase();
// console.log(questionFour);

if (questionFour === 'yes' || questionFour === 'y') {
    // console.log('You are correct!')
    alert('You are correct!')
} else if (questionFour === 'no' || questionFour === 'n') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
};

var questionFive = prompt('Is Star Wars one of my favorite trilogies?').toLowerCase();
// console.log(questionFive);

if (questionFive === 'yes' || questionFive === 'y') {
    // console.log('You are correct!')
    alert('You are correct!')
} else if (questionFive === 'no' || questionFive === 'n') {
    // console.log('You are wrong, sorry.')
    alert('You are wrong, sorry.')
};

alert(`Thank you ${userName} for visiting my website :)`);