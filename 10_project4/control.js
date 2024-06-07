const randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guesseSlot = document.querySelector('.guesses')
const remainnig = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver  = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

