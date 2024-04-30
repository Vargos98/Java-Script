// When we call the forEach we pass in anonymous callback function,
// this function gets called one time for every element in the array 
// whatever is inside the function logic will execute.


// const nums = [1,2,3,4,12411,123124,12412433546,768678]

// nums.forEach((num)=>{console.log(num)});
            // ^ CallBack Function


//Challenge


const numbers = [12,31,43,67,23,98,20]
let sum =0;

function adder(number){
  sum+=number
}

numbers.forEach(adder)
console.log(sum)