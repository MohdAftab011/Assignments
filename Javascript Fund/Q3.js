function searchCharacterClasses(str) {
    const digitPattern = /\d/g;
    const uppercasePattern = /[A-Z]/g;
    const lowercasePattern = /[a-z]/g;
    const specialCharacterPattern = /[^a-zA-Z0-9]/g;
  
    return {
      digits: str.match(digitPattern) || [],
      uppercase: str.match(uppercasePattern) || [],
      lowercase: str.match(lowercasePattern) || [],
      specialCharacters: str.match(specialCharacterPattern) || [],
    };
  }
  
  // Testing the function
  const testString = "Hello World! 123 #$@";
  console.log(searchCharacterClasses(testString));
  