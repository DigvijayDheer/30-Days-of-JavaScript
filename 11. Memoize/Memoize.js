/**In the memoize function, we create a cache object to store the computed
 * results of the function, and a callCount object to keep track of the number
 * of times each function is called with specific inputs. We use the JSON.
 * stringify method to convert the arguments array into a string and use it as
 * a key for the cache and callCount objects.
 */

/**
 * The returned function from memoize is the memoized version of the original
 * function. When this memoized function is called, it first checks if the
 * result for the given inputs is already available in the cache. If yes, it
 * returns the cached value and increments the call count. Otherwise, it calls
 * the original function with the given inputs, stores the result in the cache,
 * sets the call count to 1, and returns the result.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      cache[key].callCount++;
      return cache[key].result;
    } else {
      const result = fn(...args);
      cache[key] = {
        callCount: 1,
        result: result,
      };
      return result;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Given functions: sum, fib, and factorial

const sum = (a, b) => a + b;
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

// Example 1
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(1, 2)); // Output: 3

// Example 2
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(2)); // Output: 2
console.log(memoizedFactorial(3)); // Output: 6
console.log(memoizedFactorial(2)); // Output: 2

// Example 3
const memoizedFib = memoize(fib);
console.log(memoizedFib(5)); // Output: 8

// Example 4:
let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // Output: 5 (callCount = 1)
console.log(memoizedFn(2, 3)); // Output: 5 (callCount = 1, result fetched from cache)
console.log(memoizedFn(5, 7)); // Output: 12 (callCount = 2, not in cache, so the function is called again)
console.log(callCount); // Output: 2 (total number of function calls)

/**
 * In this example, the callCount variable keeps track of the total number of
 * times the original function is called. The memoizedFn is created by passing
 * a function that calculates the sum of two numbers. The first time
 * memoizedFn(2, 3) is called, the result is not present in the cache, so the
 * original function is called (callCount becomes 1). On subsequent calls with
 * the same arguments, the result is fetched from the cache, and the callCount
 * remains the same.
 */

// Example 5:
let callCount2 = 0;

const memoizedFn2 = memoize(function (str) {
  callCount += 1;
  return str.toUpperCase();
});

console.log(memoizedFn2("hello")); // Output: "HELLO" (callCount = 1)
console.log(memoizedFn2("hello")); // Output: "HELLO" (callCount = 1, result fetched from cache)
console.log(memoizedFn2("world")); // Output: "WORLD" (callCount = 2, not in cache, so the function is called again)
console.log(callCount2); // Output: 2 (total number of function calls)

/**
 * In this example, the callCount variable keeps track of the total number of
 * times the original function is called. The memoizedFn is created by passing
 * a function that converts the input string to uppercase. The first time
 * memoizedFn("hello") is called, the result is not present in the cache, so
 * the original function is called (callCount becomes 1). On subsequent calls
 * with the same argument, the result is fetched from the cache, and the
 * callCount remains the same.
 */
