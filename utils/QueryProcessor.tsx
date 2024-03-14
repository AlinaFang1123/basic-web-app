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

  if (query.startsWith("Which of the following numbers is both a square and a cube:")) {
    // Extract the numbers from the query
    const numbersInQuery = query.match(/\d+/g); // This regex matches any sequence of digits in the query
    if (numbersInQuery) {
      const numbers = numbersInQuery.map(Number); // Convert the matched strings to numbers
      // Filter numbers to find those that are both perfect squares and cubes
      const validNumbers = numbers.filter(number => {
        const squareRoot = Math.sqrt(number);
        const cubeRoot = Math.cbrt(number);
        // Check if both the square root and cube root are integers
        return squareRoot === Math.floor(squareRoot) && cubeRoot === Math.floor(cubeRoot);
      });

      // Format the response with the found numbers, or indicate none were found
      return `${validNumbers.join(", ")}`;
    }
  }

  const arithmeticMatchPlus = query.match(/what is (\d+) plus (\d+)\?/i);
  if (arithmeticMatchPlus) {
    const num1 = parseInt(arithmeticMatchPlus[1], 10);
    const num2 = parseInt(arithmeticMatchPlus[2], 10);
    return (num1 + num2).toString(); // Perform the addition and return the result as a string
  }

  // Handling arithmetic expressions with multiple "plus"
  if (query.startsWith("what is") && query.includes("plus")) {
    const numbers = query.match(/\d+/g); // Find all numbers in the query
    if (numbers) {
      const sum = numbers.reduce((acc, curr) => acc + parseInt(curr, 10), 0); // Sum all found numbers
      return sum.toString(); // Return the sum as a string
    }
  }

  function isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  if (query.startsWith("Which of the following numbers are primes:")) {
    const numbersInQuery = query.match(/\d+/g); // Extract the numbers from the query
    if (numbersInQuery) {
      const numbers = numbersInQuery.map(Number); // Convert the matched strings to numbers
      const primeNumbers = numbers.filter(number => isPrime(number)); // Filter numbers to find primes
      return primeNumbers.join(", "); // Return the prime numbers as a string
    }
  }



  return "no match";
}
