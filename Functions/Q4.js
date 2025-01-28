function calculateTax() {
    return (income) => {
      if (income <= 30000) {
        return income * 0.1; // 10% tax
      } else if (income <= 100000) {
        return income * 0.2; // 20% tax
      } else {
        return income * 0.3; // 30% tax
      }
    };
  }
  
  const taxCalculator = calculateTax();
  
  // Testing the function
  console.log(`Tax for $25,000: $${taxCalculator(25000)}`);
  console.log(`Tax for $50,000: $${taxCalculator(50000)}`);
  console.log(`Tax for $150,000: $${taxCalculator(150000)}`);
  