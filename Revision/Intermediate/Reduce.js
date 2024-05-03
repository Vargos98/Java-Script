// The reduce() method applies the reducer function to each element of an array accumulating the results into a single value. It is often used to perform calculations or aggregations on array elements and simplify the array  into a single value.

// Note reduce() method does not work on an empty array. Also, it makes a copy of that array and works on it.


const numbers = [1,2,3,4,5,6,7]

const sum = numbers.reduce((previousVal, currentVal)=>{
  console.log(`previousVal: ${previousVal}`);
  console.log(`currentVal : ${currentVal}`);
  
  return previousVal + currentVal;
},0);

console.log(sum);