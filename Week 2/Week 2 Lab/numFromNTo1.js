function printNumbersDescending(n) {
   
    if (Number.isInteger(n) && n > 0) {
      while (n >= 1) {
        console.log(n);
        n--;
      }
    } else {
      console.log("Please provide a positive integer.");
    }
  }
  
  printNumbersDescending(5);
  printNumbersDescending(3);
  printNumbersDescending(-2);
