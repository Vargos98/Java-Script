
// const js= "amazing";

// if(js === "amazing")alert("Javascript loaded")


// const country = "India";
// const continent = " Asia";
// const population = " 7 millions"; 

// console.log( country + continent + population);
// console.log(typeof population)
// console.log(typeof null)





// const firstName = "Umesh";
// const birthYear = 1998;
// const job = "developer";
// const year = 2023;

// // this method is the basic way of writing a String.
// const out = "I'm" + firstName + "i am a " + job + "my age is " + (year - birthYear);
// console.log(out);

// // Best way of writing a string

// const newOut = `I'm ${firstName}, i am a ${job}, my age is ${year- birthYear}, years old `;
// console.log(newOut)
  


const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heighJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;

const BMIJohn = massJohn / heighJohn ** 2;

console.log(BMIMark , BMIJohn);


if(BMIMark > BMIJohn){
    console.log(`Marks BMI ${BMIMark}, is higher than John's ${BMIJohn}, !`);
    
}else{
    console.log(`John's BMI ${BMIJohn}, is higher than Mark's ${BMIMark}, !`);
}