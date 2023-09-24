// let hasDriversLicense = false;

// const testPassed = true;

// if(testPassed === true){
//     hasDriversLicense = true;
//     console.log(hasDriversLicense);
// }


// function logger(){
//     console.log("log")


// }

// logger();
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges); 
//     const juice = `Juice with ${apples} apples and ${oranges} oranges are very tasty`;
//     return juice;
// }

// const juiceReturns = fruitProcessor(5, 4);
// console.log(juiceReturns);

// console.log(fruitProcessor(8,9));

// function calcAge(year){
//     const presentYear = 2023;
//     return(`you are ${presentYear - year} years old`);
// }

// console.log(calcAge(1998));



// const cutPieces = function(fruit){
//     return fruit* 4;

// }

// const fruitProcessor = function(apples, oranges){
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges tastes tasty`;
//     return juice;
// }

// console.log(fruitProcessor(5,4));


const calAverage = (num1, num2, num3) =>
     (num1+num2+num3)/3;




//   let scoreDolphins = calAverage(98,21,65); 
//     let scoreKoalas = calAverage(31,91,98);
//     console.log(scoreDolphins ,scoreKoalas);
 

//     const checkWinner = function(avgDolphins, avgKoalas){
//         if(avgDolphins >=2* avgKoalas){
//            console.log(  `Dolphins win ${avgDolphins} vs ${avgKoalas}`)
//         }else if(avgKoalas>= 2* avgDolphins){
//              console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`)
//         }else{
//             console.log(`Nobody wins`)
//         }
//     }

//     checkWinner(scoreDolphins, scoreKoalas);

//arr


// let arr= [1,2,3,4,5];
// let brr =[6,7,8,9];

// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.join("-");
// console.log(arr);
// arr.unshift(12);
// console.log(arr);

// let a2 = arr.concat(brr);
// console.log(a2);

// let b2 = arr.keys();
// console.log(b2);

const jonas ={
     firstName: 'Umesh',
     lastName:'Kumar',
     birthYear: 1998,
     job:'student',
     friends:['Samir', 'Amit', 'Bongoli'],
     calcAge: function(){
          console.log(this);
          return 2023- this.birthYear;
     }
};

console.log(jonas.calcAge());



// console.log(jonas.age);

// const interestedIn = prompt ('What do you want to know ?');

// if(jonas[interestedIn]){
//      console.log(jonas[interestedIn])
// }else{
//      console.log('please ask something different');
// }


// const challenge = console.log(`${jonas['firstName']}  has  ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// console.log(challenge);