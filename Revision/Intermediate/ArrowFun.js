// Normal function expression 

function greet(userName){
  console.log(`Hey there ${userName}`)
}

greet("Vargos");

// Arrow function 

const greetings = (name) =>{
  return (`How are you ${name}`)
}

console.log(greetings("Vargos"));

// we can also use arrow functions like this as well for single parameters  
// But when we have more than one parameter use () parenthesis.
// also no need to curly brackets and return keyword when we have single line of code.


const aloha = surname => (`Your surname is ${surname}`);

console.log(aloha("EkThaTaxi"));


const double = n => n*2;

console.log(double(5));