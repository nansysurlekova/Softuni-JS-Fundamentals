function printJoinedNames(firstName, lastName, delimiter) {
   
    const joinedNames = `${firstName}${delimiter}${lastName}`;
    console.log(joinedNames);
  }

  printJoinedNames('John', 'Smith', '->');
  printJoinedNames('Jan', 'White', '<->');
  printJoinedNames('Linda', 'Terry', '=>');
 
  