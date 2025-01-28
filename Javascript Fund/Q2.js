function matchPattern(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
  }
  
  // Testing the function
  console.log(matchPattern("hello", "hello world")); // true
  console.log(matchPattern("^a", "apple")); // true
  console.log(matchPattern("world$", "hello world")); // true
  console.log(matchPattern("\\d", "no digits here")); // false
  