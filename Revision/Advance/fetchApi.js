// There are 2 methods of using fetch() method 

// 1. with promises.


fetch("https:API-URL")
.then(response=>{
  if(!response){
    throw new Error("Network response was not ok!");
  }
  return data = response.json();
})

.then(data=>{
  console.log(data);
})
.catch(error=>{
  console.log("Error occurred fetching ur data : ", error);
})


// 2nd method using async and await 


async function getData(){
  try {
    let response = await fetch("https:API-URL");
    let data = await response.json();
    console.log(data);
  } catch (error) {

    console.log("Error occured while fetching data", error);
    
  }
}


// Among these 2 methods the most easy and readable code is using async and await.