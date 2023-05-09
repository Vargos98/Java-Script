// in js the for-in-loop allows you to loop through the properties of an object.
//the statements in the code found within the loop will executed once for each property of the object.

// example 

// var colors = {
//     primary : 'Blue',
//     secondary : 'Red',
//     tertiary : 'White'
// }

// // syntax 

// for( var color in colors){
//     console.log(color +'->'+colors[color])
// }

// we can use it in arrays as well

var colorarr = ['Yellow','green','pink','black']
for( var color in colorarr){
    console.log(color+'->'+colorarr[color])
}