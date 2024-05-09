const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const label = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
  count++;
  label.textContent= count;
}

decreaseBtn.onclick = function(){
  count--;
  label.textContent= count;
}
resetBtn.onclick = function(){
  count = 0;
  label.textContent= count;
}