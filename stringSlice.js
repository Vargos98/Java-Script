var tweet = prompt("Compose your tweet : ");
var tweetcount=tweet.length;
console.log(tweetcount);
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);