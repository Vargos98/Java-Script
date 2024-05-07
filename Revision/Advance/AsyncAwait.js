
// In async function it would always return a promise.
// and await function stops any other execution until and unless the promise is fulfilled.
// NOTE: we can only use await keyword only with async function.





// example of async and await function.

function api(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Weather data received!!"); 
      resolve(200);


    },2000);
  })
}

async function getWeatherData(){
  await api();
}