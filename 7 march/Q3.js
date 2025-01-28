const Calculator = {
    value: 0,
  
    add(number) {
      this.value += number;
      return this; // Enable chaining
    },
  
    subtract(number) {
      this.value -= number;
      return this;
    },
  
    multiply(number) {
      this.value *= number;
      return this;
    },
  
    divide(number) {
      if (number !== 0) {
        this.value /= number;
      } else {
        console.error("Division by zero is not allowed!");
      }
      return this;
    },
  
    reset() {
      this.value = 0;
      return this;
    },
  
    getResult() {
      return this.value;
    },
  };
  
  // Example Usage
  Calculator.add(10).subtract(5).multiply(3).divide(2);
  console.log(Calculator.getResult()); // Output: 7.5
  