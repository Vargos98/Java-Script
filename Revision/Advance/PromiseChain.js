// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data1");
//       resolve("success");
//     }, 4000);
//   });

// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data2");
//       resolve("success");
//     }, 4000);
//   });
// }


// let p1 = asyncFunc1();


// console.log("fetching data1.....")
// asyncFunc1().then((res)=>{                                // example of promise chaining 
//   console.log("fetching data2....");                      // as soon as promise 1 is fulfilled
//   asyncFunc2().then((res)=>{});                           // promise runs.
// });


// p1.then((res) => {
//   console.log("Successfully parsed", res);            //Over here
//   console.log("Getting data2.....")
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log("Successfully parsed", res);
//   })
// })

// p1.catch((err) => {
//   console.log("Error occured", err);
// })


// p2.then((res)=>{
//   console.log("Successfully parsed", res);
// })

// p2.catch((err)=>{
//   console.log("Error occured",err);
// })

// example 4


// let ans = new Promise((res,rej)=>{
//   let n = Math.floor(Math.random()*10);
//   if(n<5){
//     return res();
//   }else{
//     return rej();
//   }
// })

// ans.then(()=>{
//   console.log("Below");
// })
// .catch(()=>{
//   console.log("Above");
// })

// example for promise 

let dishReady = new Promise((res,rej)=>{
  let dish = cookDish();
  if(dish){
    res(dish);
  }else{
    rej(dish);
  }
})


.then((dish)=>{
  console.log("Yay! I got my dish", dish);
  return orderDessert();
})
.then((dessert)=>{
  console.log("Dessert is here:", dessert);
})

.catch((err)=>{
  console.log('Oh no there was a problem', err);
})





// example 5  for promise chaining


let firstTask = new Promise((res,rej)=>{
  setTimeout(()=>{
    console.log("First task is completed")
    res();
  },2000);
})

let secondTask = new Promise((res,rej)=>{
  setTimeout(()=>{
    console.log("Second task is completed")
    res();
  },3000);
})

firstTask.then(()=>{
  return secondTask;
}).then(()=>{
  console.log("Both tasks are completed");
});