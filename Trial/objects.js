var person = {
    firstname : "Umesh",
    lastname : "Kumar",
    age : 24,
    ownsCar : false

};

console.log(person)
// if we want to access the details inside the class we can use 
// dot notation.
//like 

console.log(person.age)
// other method is Bracket notation
// i.e
// person['firstname']

console.log(person['firstname'])

// we can add object inside objects 

var cap ={
        firstname : 'steve',
        lastname : 'rogers',
        age : 102,
        // we can also add an array 

        friends : ['Bucky', 'tony','bruce'],
        // we can set value to true and false 

        isAvenger : true,

        // second obj

        address :{
            state : 'New york',
            // third obj
            city : {
                name:'Brooklyn',
                pin: 1202026
            }
        }
}


console.log(cap.friends[1]) // it would print tony
console.log(cap.address.city.name)
// we can change the values from outside the class as well 
cap.isAvenger = false
console.log(cap)

// we can also add new values inside the obj 
// like 

cap.movies = ['age of ultron', 'infinity war', 'first avernger']
console.log(cap)
// you can also delete values like

delete cap.age

console.log(cap)


