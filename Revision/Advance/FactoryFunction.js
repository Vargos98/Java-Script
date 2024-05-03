// Factory functions are methods through which we can define a set of parameters and we can use those parameters to enter the details/values based on our requirements. In other words these are like parameterized functions used for specific problems.


function vehicles(type, brand, model, year){
  return {type,
    brand,
    model,
    year}

}

const audi = vehicles("suv","Audi","X4",2021);
console.log(audi);

