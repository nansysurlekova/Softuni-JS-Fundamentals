function calculateReadingHours(pagesPerBook, pagesPerHour, numberOfDays) {
    const totalReadingTime = pagesPerBook / pagesPerHour;
    const hoursPerDay = totalReadingTime / numberOfDays;
  
    console.log(hoursPerDay.toFixed(1));
  }
  
  calculateReadingHours(212, 20, 2);
  calculateReadingHours(432, 15, 4);
 