const person = {
  name:"Umesh",
  age:26,
   greetRegular:function(){
    return(`${this.name} ${this.age}` );
  },
  greetArrow : ()=>{
    return(`${this.name} ${this.age}` );
  },

}

console.log(person.greetRegular());
console.log(person.greetArrow());

// NOTE : Arrow function doesn't print the values stored in the object as it prints "undefined"
//whereas a normal function can print using "this" keyword the values stored in the object.