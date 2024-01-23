function printNextNOddNumbersAndSum(n) {
   
    if (Number.isInteger(n) && n >= 1 && n <= 100) {
      let sum = 0;
      for (let i = 1; i <= n * 2; i += 2) {
        console.log(i);
        sum += i;
      }
      console.log(`Sum: ${sum}`);
    } else {
      console.log("Please provide a valid integer for n in the range [1, 100].");
    }
  }
  
  printNextNOddNumbersAndSum(5);
  printNextNOddNumbersAndSum(3);
 