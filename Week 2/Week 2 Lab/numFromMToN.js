function printNumbersInRange(m, n) {
    
    if (Number.isInteger(m) && Number.isInteger(n) && m > 0 && n > 0 && m > n) {
      while (m >= n) {
        console.log(m);
        m--;
      }
    } else {
      console.log("Please provide valid positive integers, and ensure M is greater than N.");
    }
  }
  
 
  printNumbersInRange(6, 2);
  printNumbersInRange(4, 1);
  printNumbersInRange(3, 7);
 