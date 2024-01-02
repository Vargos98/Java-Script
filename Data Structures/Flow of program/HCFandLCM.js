// const num1 = prompt('Enter a first positive integer: ');
// const num2 = prompt('Enter a second positive integer: ');

let num1= 10;
let num2=12;

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
for (let i = 1; i <= num1 && i <= num2; i++) {

    // check if is factor of both integers
    if( num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(`HCF of ${num1} and ${num2} is ${hcf}.`);