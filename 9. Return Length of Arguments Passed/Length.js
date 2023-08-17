/**
 * @return {number}
 */

var argumentsLength = function (...args) {
  var len = 0;
  for (var arg of args) len++;
  return len;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Example 1:
console.log(argumentsLength(1, 2, 3, 4, 5)); // Output: 5

// Example 2:
console.log(argumentsLength("apple", "banana", "orange")); // Output: 3

// Example 3:
console.log(argumentsLength(true, false, true, true)); // Output: 4

// Example 4:
console.log(argumentsLength(10, "hello", true, { name: "John" }, [1, 2, 3])); // Output: 5

// Example 5:
console.log(argumentsLength()); // Output: 0
