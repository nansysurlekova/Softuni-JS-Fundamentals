function calculateTicketPrice(day, age) {
    
    const prices = {
      'Weekday': [12, 18, 12],
      'Weekend': [15, 20, 15],
      'Holiday': [5, 12, 10]
    };
  
    
    let ageIndex;
    if (age >= 0 && age <= 18) {
      ageIndex = 0;
    } else if (age > 18 && age <= 64) {
      ageIndex = 1;
    } else if (age > 64 && age <= 122) {
      ageIndex = 2;
    } else {
     
      console.log('Error!');
      return;
    }
  
    
    let ticketPrice = prices[day][ageIndex];
  
   
    console.log(`${ticketPrice}$`);
  }
  
  
  calculateTicketPrice('Weekday', 42);      
  calculateTicketPrice('Holiday', -12);    
  calculateTicketPrice('Holiday', 15);     
  