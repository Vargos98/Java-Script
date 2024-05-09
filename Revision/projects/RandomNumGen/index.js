let randomNum;

const label = document.getElementById("numGen");
const button = document.getElementById("generateNum")

button.onclick = function(){
  randomNum = Math.floor(Math.random()*10);
  label.textContent = randomNum; 
}