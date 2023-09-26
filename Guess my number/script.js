'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent="Correct Number !"; 


let secretNumber = Math.trunc(Math.random() * 20) + 1;
//             Math.trunc = "To remove decimals"
//                        Math.random() to generate random numbers
//                                     *20 to range from 0-20 
//                                          +1 to range from 1-20;


let score = 20;
let highscore = 0;


// again button 

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value= ' ';
})


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {

        document.querySelector('.message').textContent = "No input!";

    } else if (guess === secretNumber) {

        document.querySelector('.message').textContent = "You win!";

        // display the guessed number.
        document.querySelector('.number').textContent = secretNumber;
        
        
        // changing background
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector('.number').style.width="30rem";
        if(score>highscore){
            highscore =score;
            document.querySelector('.highscore').textContent=highscore;
        }


    } else if (guess < secretNumber) {
        if (score > 1) {
            
            document.querySelector('.message').textContent = "Too low!";
            score = score - 1;
            document.querySelector('.score').textContent = score;

        }else{
            document.querySelector('.message').textContent = "You Lost the game :<";
            document.querySelector('.score').textContent = 0;
        }

        
    }else if (guess > secretNumber) {
        if (score > 1) {
            
            document.querySelector('.message').textContent = "Too High!";
            score = score - 1;
            document.querySelector('.score').textContent = score;

        }else{
            document.querySelector('.message').textContent = "You Lost the game :<";
            document.querySelector('.score').textContent = 0;
        }

        
    }

});

