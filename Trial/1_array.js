// arrays are ordered collection of data

var arr = [5, 'umesh', 15.5, true]

console.log(arr)

// accessing the elements
var a = arr[1]

console.log(a)

 // other way
 console.log(arr[3])
 
// changing values 
 arr[1] = 'vargos'

 console.log(arr)

 // built-in array methods in Js

 var arr2 =[12,13,18,19,20]

// "pop method" it will delete the last element in the array 

arr2.pop()
console.log(arr2)

// "push method" it will add a new element at the end of the array 

arr2.push(31)
console.log(arr2)


// now if we want to delete element from the starting of an array 
// we use "Shift method"
var d = arr2.shift()
console.log(d)

console.log(arr2)

// now adding an element to the starting of an array we use "Unshift method"

var e = arr2.unshift(1998)
console.log(arr2)