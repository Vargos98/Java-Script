'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent="Correct Number !"; 


const secretNumber = Math.trunc(Math.random()*20 )+1;
//             Math.trunc = "To remove decimals"
//                        Math.random() to generate random numbers
//                                     *20 to range from 0-20 
//                                          +1 to range from 1-20;
document.querySelector('.number').textContent=secretNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent="No input!";
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent="You win!";

    }else if(guess < secretNumber){
        document.querySelector('.message').textContent="Too Low!";
    }else if(guess > secretNumber){
        document.querySelector('.message').textContent="Too High!";
    }

    
});