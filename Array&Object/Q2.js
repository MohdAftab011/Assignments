const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort and find min/max
const sortedAges = [...ages].sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// Find median
const mid = Math.floor(sortedAges.length / 2);
const median = sortedAges.length % 2 === 0 
  ? (sortedAges[mid - 1] + sortedAges[mid]) / 2 
  : sortedAges[mid];

// Find average
const average = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find range
const range = maxAge - minAge;

// Compare |min - average| and |max - average|
const diffMin = Math.abs(minAge - average);
const diffMax = Math.abs(maxAge - average);
const comparison = diffMin > diffMax ? "Min deviates more" : "Max deviates more";

console.log({
  sortedAges,
  minAge,
  maxAge,
  median,
  average,
  range,
  comparison
});