function printNumbersDivisibleBy3() {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0) {
      console.log(index);
    }
  }
}
printNumbersDivisibleBy3();
