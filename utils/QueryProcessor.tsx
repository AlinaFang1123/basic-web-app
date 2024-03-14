export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "chenfang"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Alinaaa"
    );
  }
  
  if (query.toLowerCase().includes("largest")) {
    const matches = query.match(/\d+/g); // Find all numbers in the query
    if (matches) {
      const numbers = matches.map(Number); // Convert all found strings to numbers
      const largest = Math.max(...numbers); // Find the largest number
      return largest.toString(); // Return the largest number as a string
    }
  }

  // Handling simple arithmetic expressions
  const arithmeticMatch = query.match(/(\d+)\s*\+\s*(\d+)/); // Match a basic addition pattern
  if (arithmeticMatch) {
    const num1 = parseInt(arithmeticMatch[1], 10);
    const num2 = parseInt(arithmeticMatch[2], 10);
    return (num1 + num2).toString(); // Perform the addition and return the result as a string
  }

  // Handle multiplication queries
  const multiplicationMatch = query.match(/what is (\d+) multiplied by (\d+)\?/);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    return (num1 * num2).toString();
  }

  // Handle queries for numbers that are both a square and a cube (perfect sixth powers)
  if (query.includes("which of the following numbers is both a square and a cube")) {
    const matches = query.match(/\d+/g); // Find all numbers in the query
    if (matches) {
      const numbers = matches.map(Number); // Convert all found strings to numbers
      const perfectSixthPowers = numbers.filter(num => {
        const sixthRoot = Math.pow(num, 1/6);
        return sixthRoot === Math.floor(sixthRoot); // Check if the sixth root is an integer
      });

      if (perfectSixthPowers.length > 0) {
        // Return the first perfect sixth power found, or modify to return all if needed
        return perfectSixthPowers.join(", ");
      } else {
        return "No number is both a square and a cube.";
      }
    }
  }

  const arithmeticMatchPlus = query.match(/what is (\d+) plus (\d+)\?/i);
  if (arithmeticMatchPlus) {
    const num1 = parseInt(arithmeticMatchPlus[1], 10);
    const num2 = parseInt(arithmeticMatchPlus[2], 10);
    return (num1 + num2).toString(); // Perform the addition and return the result as a string
  }

  return "no match";
}
