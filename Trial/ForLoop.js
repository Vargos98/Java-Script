var a = "Hello JavaScript"
// for loop
for(var i =0;i<2;i++)
{
    console.log(a)
}
// if we want to square of every element in an array 

var num = [2,3,4,5,6,7,8]

var sqrarr = [] // empty array 
for(var i=0;i<num.length;i++)
{
    sqrarr.push(num[i]*num[i])
}

console.log(sqrarr);
var add = function(a,b){
    console.log(a+b)
}
add(2,3)