console.log("first")
console.log("second")
setTimeout(()=>{ //// this logic makes the code async.
  console.log("Hi")
},4000);
console.log("Third")
console.log("Four")