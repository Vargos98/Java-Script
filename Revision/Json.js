const person={
  name:"Umesh",
  age:25,
  email:"vargos98@gmail.com",
  isSubscribed:true,
  address:["Earth","India","Mumbai"],
  hobbies:{
    running: true,
    swimming : false,
    jumping:true,
  }
}

console.log(person);

const jsonStringify = JSON.stringify(person);
console.log(jsonStringify);

const jsonParse = JSON.parse(jsonStringify);
console.log(jsonParse);