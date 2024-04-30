function showCallFunc(fn){
  let holdes = 10;
  fn(holdes);
}

showCallFunc(function(holdes){
  console.log(holdes);
})