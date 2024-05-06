function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data1");
      resolve("success");
    }, 4000);
  });

}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data2");
      resolve("success");
    }, 4000);
  });
}


// let p1 = asyncFunc1();


console.log("fetching data1.....")
asyncFunc1().then((res)=>{                                // example of promise chaining 
  console.log("fetching data2....");                      // as soon as promise 1 is fulfilled
  asyncFunc2().then((res)=>{});                           // promise runs.
});


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


