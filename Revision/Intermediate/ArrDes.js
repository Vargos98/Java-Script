const colors = ["Red","Green","Blue","Yellow","black","orange"]

const [one,two,three,...res] = colors;

console.log(one)
console.log(two)
console.log(three)
console.log(res)


//note in array we can access and return any name from the array i.e Red was stored in variable named one
//But in Objects we have to mention the exact name provided in the Object definition or else output would be undefined.


const student = {
  name: "Umesh",
  age:26,
  rollNo:31,
  
}


const {name} = student;

console.log(name); // OUT: Umesh

/////

const {color} = student;

console.log(color); //OUT: undefined.

// name should be same when destructuring an Object.