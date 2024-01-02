// Input a year and find whether it is a leap year or not.

let y = 2013;
  {
    if((y % 400 == 0) ||
       (y % 100 != 0) && 
       (y % 4 == 0))
    {
      console.log("yes");
    }
    else
    {
      console.log("no");
    }
  }
 

