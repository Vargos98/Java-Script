function lifeInWeeks(age) {
    
   
       var LeftYears = 90-age;
                var days = LeftYears * 365;
                var weeks = LeftYears * 52;
                var months = LeftYears * 12;
                
                console.log("You have "+days+" days, "+weeks+ " weeks, and " +months+ " months left." ); 

    }
    
    lifeInWeeks(12);
    
    