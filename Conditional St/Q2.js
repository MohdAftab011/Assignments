function getGrade(marks) {
    if (marks > 90) return 'A';
    else if (marks >= 70 && marks <= 90) return 'B';
    else if (marks >= 50 && marks < 70) return 'C';
    else return 'F';
  }
  
  // Test cases:
  console.log(getGrade(95)); // A
  console.log(getGrade(85)); // B
  console.log(getGrade(60)); // C
  console.log(getGrade(30)); // F