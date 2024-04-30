const person = {
  Fname: "Umesh",
  Lname:"Kumar",
  num:9828506881,
  location:["Earth","India","Mumbai"],
  status: "single"
}

console.log(person.location);

person.Lname="Bhagat";
console.log(person);

person["Fname"] = "Vargos";

console.log(person.Fname)