// Constructor functions in Js are regular functions used with the New keyword to create and initialize objects with shared properties and methods. they as blueprints for creating multiple instances of objects with the same structuore and behaviour.

// NOTE: Constructor functions always begin with Capital letter and are initialized using "new" & "this" keyword.

function CreatePeople(fname,lname,pl){
  this.fname = fname
  this.lname = lname
  this.pl = pl

  // using "this" keyword to initialize the values.
}


const umesh = new CreatePeople("Umesh","Kumar","Python");
console.log(umesh);

// using "new" keyword to initialize the constructor function.

//1. first create empty object{}
//2. sets "this" to point to that object
//3. we can omit the "return" keyword statement using "new" keyword.



// Challenge 


function Person(name,age,gender)
{
  this.name = name
  this.age = age
  this.gender = gender 

  this.info = function(){
   console.log(   `${this.name} ${this.age} ${this.gender}`)
  } 
}

const peep1 = new Person("Vargos",26,"M");
peep1.info();