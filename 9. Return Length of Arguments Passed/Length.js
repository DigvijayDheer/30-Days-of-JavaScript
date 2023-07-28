/**
 * The provided code defines a function called argumentsLength that takes
 * any number of arguments and returns the total number of arguments passed
 * to it.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var argumentsLength = function (...args) {
  var len = 0;
  for (var arg of args) len++;
  return len;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1:
console.log(argumentsLength(1, 2, 3, 4, 5)); // Output: 5
/**
 * In this example, the argumentsLength function is called with five
 * arguments (1, 2, 3, 4, and 5). The function will count the number of
 * arguments and return 5 as the output.
 */

// Example 2:
console.log(argumentsLength("apple", "banana", "orange")); // Output: 3
/**
 * In this example, the argumentsLength function is called with three string
 * arguments. The function will count the number of arguments and return 3 as
 * the output.
 */

// Example 3:
console.log(argumentsLength(true, false, true, true)); // Output: 4
/**
 * Here, the argumentsLength function is called with four boolean arguments.
 * The function will count the number of arguments and return 4 as the output.
 */

// Example 4:
console.log(argumentsLength(10, "hello", true, { name: "John" }, [1, 2, 3])); // Output: 5
/**
 * In this example, the argumentsLength function is called with arguments
 * of different types, including a number, a string, a boolean, an object,
 * and an array. The function will count the number of arguments and return
 * 5 as the output.
 */

// Example 5:
console.log(argumentsLength()); // Output: 0
/**
 * In this case, the argumentsLength function is called without any arguments.
 * The function will count the number of arguments, which is zero in this case,
 * and return 0 as the output.
 */
