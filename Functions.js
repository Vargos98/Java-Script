// functions are block of code which only run when called for.
// functions can also be paramaterised so that we can overload functions and use them for specific tasks.

//example 

// three ways to initialize a function 

//First
var add = function(a,b){
    console.log(a+b)
}
add(2,3)

//Second

var add = function(a,b){
    return a+b
}
add(2,3)

//Third
var sum = add
 var result = sum(3,4)

 console.log(result)