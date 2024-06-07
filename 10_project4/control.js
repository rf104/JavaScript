let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guesseSlot = document.querySelector('.guesses')
const remainnig = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver  = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess =parseInt(userInput.value);
        //console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number greater than 1')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess);
        
        if(numGuess>10){
            displayGuess(guess);
            displayMessage(`Game Over.Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You Won!`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Opps!your guessed number was too low!`)
    }
    else if(guess>randomNumber){
        displayMessage(`Opps!your guessed number was too high!`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guesseSlot.innerHTML += `${guess} `
    numGuess++;
    remainnig.innerHTML = `${11-numGuess}` 
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    //randomNumber = parseInt(Math.random()*100+1);
    const newNumberButton = document.querySelector('#newGame');
    newNumberButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100+1) 
        prevGuess = []
        numGuess = 1;
        guesseSlot.innerHTML = ''
        remainnig.innerHTML = `${11-numGuess} `
        startOver.removeChild(p);
        userInput.removeAttribute('disabled');
        displayMessage('')
        playGame = true;
    })
}
