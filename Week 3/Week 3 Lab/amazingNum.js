function isAmazingNumber(number) {
  const numberStr = number.toString();
  const digitSum = Array.from(numberStr, Number).reduce((acc, digit) => acc + digit, 0);
  const isAmazing = digitSum === 9; 

  console.log(`${number} Amazing? ${isAmazing}`);
}


isAmazingNumber(1233);
isAmazingNumber(999);
