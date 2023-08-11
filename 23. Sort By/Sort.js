/**===================================================================== */
// CODE
/**===================================================================== */

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1:
const books = [
  { title: "Book A", year: 2010 },
  { title: "Book B", year: 2005 },
  { title: "Book C", year: 2020 },
];
// Sorting books by publication year
const sortedByYear = sortBy(books, (book) => book.year);
console.log(sortedByYear);
// Output: [{ title: 'Book B', year: 2005 }, { title: 'Book A', year: 2010 }, { title: 'Book C', year: 2020 }]

// Example 2:
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Sorting names by length
const sortedByLength = sortBy(names, (name) => name.length);
console.log(sortedByLength);
// Output: ['Bob', 'Eve', 'Alice', 'David', 'Charlie']

// Example 3:
const numbers = [5, 2, 9, 1, 3];
// Sorting numbers by their squares
const sortedBySquares = sortBy(numbers, (num) => num * num);
console.log(sortedBySquares);
// Output: [1, 2, 3, 5, 9]
