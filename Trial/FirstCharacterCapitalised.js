var name= prompt("What is your name:")
//first user enters his name
var firstChar = name.slice(0,1);
// second the first alphabet is isolated from rest of the string.
var upper = firstChar.toUpperCase();
// third the first charater is converted to uppercase.
var restofName = name.slice(1,name.length);
// fourth rest of the name is sliced. 
var capitalisedName = upper + restofName;
// lastly all of the name is concatinated.
console.log(capitalisedName);
// output is printed