
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
  


// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heighJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;

// const BMIJohn = massJohn / heighJohn ** 2;

// console.log(BMIMark , BMIJohn);


// if(BMIMark > BMIJohn){
//     console.log(`Marks BMI ${BMIMark}, is higher than John's ${BMIJohn}, !`);
    
// }else{
//     console.log(`John's BMI ${BMIJohn}, is higher than Mark's ${BMIMark}, !`);
// }

// let scoreDolphins = (98+108+89)/3;
// let scoreKoalas = (88+91+110)/3;

// if(scoreDolphins> scoreKoalas){
//     console.log("Dolphins win the trophy");

// }else if(scoreKoalas > scoreDolphins)
// {
//     console.log("Koalas win the trophy");
// }
// else if(scoreDolphins === scoreDolphins)
// {
//     console.log("both of them win the trophy");
// }


// const bill = 275;
// const tip = bill<=300 && bill >=50 ? bill * 0.15 : bill * 0.2;
// console.log(`the bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip} `);

const TheHobbit = function (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "was read" : "not read yet"}`);
  };
};

// Create an instance of TheHobbit
const book = new TheHobbit("The Hobbit", "J.R.R. Tolkien", 310, false);

// Call the info method
book.info();
 // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
