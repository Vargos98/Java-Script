// Axios is a library that simplifies Http requests and handles json data automatically.

// There are 2 methods of using axios but in both cases we need to install axios package via NPM
// npm -i axios


//1. promises 

const axios = require('axios');

const response = axios.get('https:API-URL');

response.then(response => { 
  console.log(response);             // data automatically converted from json format
})
  .catch(error => {
    console.log("Error occurred ", error);
  })


//2. async/await 



const axios = require('axios');
async function fetchData() {
  try {
    const response = await axios.get('https:API-URL');
    console.log(response.data);
  } catch (error) {
    console.log("Error occurred ", error);

  }
}
fetchData();



