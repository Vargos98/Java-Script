const user = (name, age, work) => {
  return {
    name,   // This is the example of enhanced object Literals as no alias has been derived directly.
    age,
    work,
  };
}
const umesh = user("Vargos", 26, "dev");
const noddy = user("Naksh", 21, "Finance")
console.log(umesh);
console.log(noddy);

//Challenge  

const num = (a, b, c) => {
  return {
    a,
    b,
    c,
  }
}

const numbers = num(1,2,3)

console.log(numbers);

