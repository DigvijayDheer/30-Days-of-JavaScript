/**
 * The provided code defines a function called compose that takes an array
 * of functions as input and returns a new function that applies these
 * functions in reverse order to a given argument x.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var compose = function (functions) {
  return function (x) {
    if (!functions) return x;
    var res = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      res = functions[i](res);
    }
    return res;
  };
};

// var compose = function (functions) {
//   return function (x) {
//     if (functions.length === 0) {
//       return x;
//     }

//     return functions.reduceRight((result, fn) => fn(result), x);
//   };
// };

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1: Compose two functions
// Two functions to be composed
function addTwo(x) {
  return x + 2;
}

function double(x) {
  return x * 2;
}

// Compose the functions: double(addTwo(x))
const composedFunction1 = compose([double, addTwo]);

// Call the composed function with an initial value of 3
const result1 = composedFunction1(3);
console.log(result1); // Output: 10 (double(addTwo(3)) = double(5) = 10)

// Example 2: Compose multiple functions
// Three functions to be composed
function subtractOne(x) {
  return x - 1;
}

function square(x) {
  return x * x;
}

function triple(x) {
  return x * 3;
}

// Compose the functions: triple(square(subtractOne(x)))
const composedFunction2 = compose([triple, square, subtractOne]);

// Call the composed function with an initial value of 4
const result2 = composedFunction2(4);
console.log(result2); // Output: 27 (triple(square(subtractOne(4))) = triple(square(3)) = triple(9) = 27)

// Example 3: No functions provided
// No functions to be composed
const emptyComposeFunction = compose();

// Call the composed function with an initial value of 10
const result3 = emptyComposeFunction(10);
console.log(result3); // Output: 10 (No functions to apply, returns the initial value)

// Example 4: Compose with a single function
// Single function to be composed
function divideByTwo(x) {
  return x / 2;
}

// Compose the function: divideByTwo(x)
const composedFunction4 = compose([divideByTwo]);

// Call the composed function with an initial value of 20
const result4 = composedFunction4(20);
console.log(result4); // Output: 10 (divideByTwo(20) = 20 / 2 = 10)

/**
 * These examples demonstrate how the compose function can be used to
 * create new functions that apply a series of transformations in reverse
 *  order to a given input value.
 */
