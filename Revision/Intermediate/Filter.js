// the filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. it porvides a clean and concise way to filter out elements from an array based on a specified criteria.

const songs = [
  {name: "Lucky You", duration: 4.34},
  {name: "I hate you", duration: 3.46},
  {name: "Ja Chudail", duration: 5.66},
  {name: "Bedardi raja", duration: 4.02},
  {name: "Saiyaan", duration: 3.06},
]

console.log(songs.filter(song=> song.duration < 4))

// Challenge 

const ages = [32,33,16,40,55,23,72,12]

console.log(ages.filter(age=>age >18));


//Challenge 2 

const words = [
  "spray",
  "vargos",
  "mom",
  "elephant",
  "girafe",
  "cat",
  "hippopotomus",
];

console.log(words.filter(word=> word.length > 6))