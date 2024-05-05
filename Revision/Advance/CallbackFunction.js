function sum(a,b){
  console.log(a+b);

}

function calculator(a,b,sumCallback){
  sumCallback(a,b);
}

calculator(1,2,sum);


// Other method of callback function 
calculator (3,4,(a,b)=>{
  console.log(a+b);
});