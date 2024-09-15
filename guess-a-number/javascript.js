let randomNumber=parseInt(Math.random()*100 + 1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowhigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number more than 1')
    }else if(guess>100){
        alert('plese enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMassage(`Game Over.Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
   if(guess === randomNumber){
    displayMassage(`you guessed it right`)
    endGame()
   }
   else if(guess<randomNumber){
    displayMassage(`number is too low`)
   }
   else if(guess>randomNumber){
    displayMassage(`number is tooo high`)
   }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML +=`${guess},`
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMassage(message){
   lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function newGame(){
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id="newGame">start new game</h2>`;
   startOver.appendChild(p)
   newGame()
}
function endGame(){
   document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100 + 1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame=true
   })
}