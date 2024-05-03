// The find() method is another built-in array helper in Js that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

const peoples = [ 
  {name:"Vargos", age:26},
  {name:"Samir", age:26},
  {name:"Neha", age:25},
  {name:"Noddy", age:21},
  {name:"Tiwadi", age:25},
]


console.log(peoples.find(peeps=> peeps.name== "Samir"));


//Challenge 

const ages  = [12,34,56,10,9,27,64];

function checkAge(age){
  return age >= 18;
}

const res = ages.find(checkAge);
console.log(res);