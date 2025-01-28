function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Testing the function
  console.log(`Factorial of 5: ${factorial(5)}`);
  console.log(`Factorial of 0: ${factorial(0)}`);
  console.log(`Factorial of -3: ${factorial(-3)}`);
  