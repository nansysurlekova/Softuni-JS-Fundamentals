function compareStrings(wordWithUnderscore, replacementChar, secondString) {
  
    const modifiedWord = wordWithUnderscore.replace('_', replacementChar);
  
    
    if (modifiedWord === secondString) {
      console.log('Matched');
    } else {
      console.log('Not Matched');
    }
  }
  
 
  compareStrings('Str_ng', 'I', 'Strong');

  compareStrings('Str_ng', 'i', 'String');
  
  