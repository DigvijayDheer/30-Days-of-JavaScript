/**
 * The code defines a filter function that takes an array arr and a callback
 * function fn as arguments. The purpose of the filter function is to create
 * a new array containing only the elements from the original array arr for
 * which the callback function fn returns true.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var filter = function (arr, fn) {
  var filteredArr = [];
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr[j++] = arr[i];
    }
  }
  return filteredArr;
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1: Filter even numbers
// Callback function to filter even numbers
function isEven(num) {
  return num % 2 === 0;
}

// Original array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtering even numbers
var evenNumbers = filter(numbers, isEven);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Filter words longer than a certain length
// Callback function to filter words longer than a given length
function isLongWord(word, index) {
  return word.length > 5;
}

// Original array of words
var words = ["apple", "banana", "orange", "watermelon", "grapes"];

// Filtering words longer than 5 characters
var longWords = filter(words, isLongWord);

console.log(longWords); // Output: ['banana', 'orange', 'watermelon']

// Example 3: Filter objects based on a property value
// Callback function to filter objects based on a property value
function isOldEnough(person, index) {
  return person.age >= 18;
}

// Original array of objects (each representing a person)
var people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 16 },
  { name: "Mike", age: 20 },
];

// Filtering people who are 18 years or older
var adults = filter(people, isOldEnough);

console.log(adults);
/* Output:
[
  { name: 'John', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Mike', age: 20 }
]
*/
