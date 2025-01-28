function generateNumbers(num1, num2) {
    const start = Math.min(num1, num2) + 1;
    const end = Math.max(num1, num2);
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result.join(', ');
  }
  
  // Example:
  const num1 = 10, num2 = 25;
  console.log(generateNumbers(num1, num2)); // 11, 12, ..., 25