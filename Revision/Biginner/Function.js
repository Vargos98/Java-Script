
//Function declaration 

function multi(x,y){
  return x * y;
}

let res = multi(10,30);
console.log(res);


//function Expression


const greet = function(name){
  console.log(`hi there ${name}`);
}
greet("umesh");


// NOTE: WE can call the function in function declaration before the Function declaration but same cannot be done in function expression.