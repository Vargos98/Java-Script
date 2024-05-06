// let promise = new Promise((resolve,reject)=>{
//   console.log("I am a promise");
//   resolve("Success");
//   reject("some error occurred");
// })
// console.log(promise); 

function getData(dataId, getNextData){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      // console.log("data", dataId);
      // resolve("success");
      reject("error");
      if(getNextData){
        getNextData();
      }
    },2000);
  });
}

let result = getData(123);
console.log(result);