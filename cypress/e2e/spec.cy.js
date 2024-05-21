// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('template spec', () => {
  it('passes', () => {
function countAlphabets(string) {
  // Reverse the string
  const reversedString = string.split('').reverse().join('');
  const alphabetCounts = {};

  // Iterate through the reversed string
  for (let char of reversedString) {
      // Check if the character is an alphabet
      if (/^[A-Za-z]$/.test(char)) {
          // Convert to lowercase for case-insensitive counting
          char = char.toLowerCase();
          // Update or initialize the count of the alphabet
          alphabetCounts[char] = (alphabetCounts[char] || 0) + 1;
      }
  }

  return alphabetCounts;
}

// Example usage:
const inputString = "Hello, World!";
const counts = countAlphabets(inputString);
console.log("Counts of each alphabet in the reversed string:");
for (const [char, count] of Object.entries(counts)) {
  console.log(`${char}: ${count}`);
}

  })
})