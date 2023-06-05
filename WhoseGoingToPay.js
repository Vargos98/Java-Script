function getRandomItem(arr) {

    var arr  = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
     var ranIdx = Math.floor(Math.random()*arr.length);
     var item = arr[ranIdx];
     return (item+" is going to buy lunch today!");
}

