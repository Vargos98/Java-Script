//Callback Hell : Nested callbacks stacked below one another forming a pyramid stucture. (Pyramid of Doom).

function getData(dataId, getNextData){
  setTimeout(()=>{
    console.log("Data", dataId)
    if(getNextData){
      getNextData();
    }
  },2000);
}

getData(1,()=>{
  console.log("Gettting data 2....")
  getData(2,()=>{
    console.log("Getting data 3....")
    getData(3,()=>{
      console.log("Getting data 4....")
    })
  })
})

//Note this type of programming is not easy to understand and manage 