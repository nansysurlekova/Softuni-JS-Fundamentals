function convert(name,lastName,hairColor) {

    let person = {
          name:name,
          lastName:lastName,
          hairColor:hairColor,
    }
    
    let stringJson=JSON.stringify(person);
    console.log(stringJson);
}
convert('George', 'Jones','Brown');