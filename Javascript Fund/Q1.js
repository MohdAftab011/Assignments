function outerFunction(outerParam) {
    const outerVariable = "I am a variable inside outerFunction";
  
    return function innerFunction(innerParam) {
      console.log(`Outer Parameter: ${outerParam}`);
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Parameter: ${innerParam}`);
    };
  }
  
  // Demonstration
  const myInnerFunction = outerFunction("Outer Parameter Value");
  myInnerFunction("Inner Parameter Value");

  