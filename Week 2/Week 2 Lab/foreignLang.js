function findLanguage(country) {
   
    const lowerCaseCountry = country.toLowerCase();
  
    switch (lowerCaseCountry) {
      case 'england':
      case 'usa':
        console.log('English');
        break;
      case 'spain':
      case 'argentina':
      case 'mexico':
        console.log('Spanish');
        break;
      default:
        console.log('unknown');
    }
  }
  
  
  findLanguage('USA');      
  findLanguage('Spain');  