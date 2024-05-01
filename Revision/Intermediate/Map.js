// the map method creates a new array populated with the results of calling a provided function on every element in the calling array.

// map method uses a callback function and returns a new arr. Unlike forEach method it works on the same array and modifies it.

let array = [1,2,3,4,56,72,1231,421]

let double = array.map(arr => arr * 2);
console.log(double);


let peoples = [
  {
    Fname: "Umesh",
    Lname: "Kumar",
    age : 26,
    hobbies : ["Gaming","Football","Basketball","Swimming"],
    work: "Developer"
  }
]

let info = peoples.map(peeps=> console.log(peeps));