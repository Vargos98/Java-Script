// year, month, day, hours, minutes, seconds, mili-sec

const currentDate = new Date();

// console.log(currentDate);
const date = new Date();

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());


const year = date.getFullYear();
const month= date.getMonth();
const day= date.getDay();
const hours= date.getHours();
const minutes= date.getMinutes();
const miliSeconds= date.getMilliseconds();
