const minNum =1 ;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum +1))+minNum;

let attempts = 0 ;
let guess;
let running = true;

while(running){
  guess =window.prompt(`guess a  number between ${minNum} - ${maxNum}`);
  // guess = Number(guess);
  console.log(typeof guess,guess);
  
  if(isNaN(guess)){
    window.alert("Please enter a valid number");
  }
  else if(guess< minNum || guess> maxNum)
    {
      window.alert("please enter a vild number in the range");
    }
    else{
      attempts++;
      if(guess< answer){
        window.alert("Too Low try again!")
      }
      else if(guess> answer)
        {
          window.alert("Too high try again!");
        }
        else{
          window.alert (`Correct the answer was ${answer}. it took you these many attempts ${attempts}`);
          running  =false;
        }
        }
    }
  
