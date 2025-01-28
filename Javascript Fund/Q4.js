function extractDateComponents(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);
  
    if (match) {
      return {
        day: match[1],
        month: match[2],
        year: match[3],
      };
    } else {
      return "No match found!";
    }
  }
  
  // Testing the function
  const dateString = "Today's date is 28-01-2025";
  const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
  console.log(extractDateComponents(datePattern, dateString));
  