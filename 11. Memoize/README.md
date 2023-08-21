## Memoize

Given a function `fn`, return a **memoized** version of that function.

A **memoized** function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: `sum`, `fib`, and `factorial`.

- `sum` accepts two integers `a` and `b` and returns `a + b`.
- `fib` accepts a single integer `n` and returns `1` if `n <= 1` or `fib(n - 1) + fib(n - 2)` otherwise.
- `factorial` accepts a single integer `n` and returns `1` if `n <= 1` or `factorial(n - 1) * n` otherwise.

#### Example 1:

```
Input:
"sum"
[("call", "call", "getCallCount", "call", "getCallCount")]
[([2, 2], [2, 2], [], [1, 2], [])];
Output: [(4, 4, 1, 3, 2)];
Explanation:
const  sum = (a, b) =>  a + b;
const  memoizedSum = memoize(sum);
memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
// Total call count: 1
memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
// Total call count: 2
```

#### Example 2:

```
Input:
"factorial"
[("call", "call", "call", "getCallCount", "call", "getCallCount")]
[([2], [3], [2], [], [3], [])];
Output: [(2, 6, 2, 2, 6, 2)];
Explanation;
const  factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const  memoFactorial = memoize(factorial);
memoFactorial(2); // Returns 2.
memoFactorial(3); // Returns 6.
memoFactorial(2); // Returns 2. However factorial was not called because 2 was seen before.
// Total call count: 2
memoFactorial(3); // Returns 6. However factorial was not called because 3 was seen before.
// Total call count: 2
```

#### Example 3:

```
Input:
"fib"
["call","getCallCount"]
[[5],[]]
Output: [8,1]
Explanation:
fib(5) = 8
// Total call count: 1
```

#### Constraints:

- `0 <= a, b <= 105`
- `1 <= n <= 10`
- `at most 10^5 function calls`
- `at most 10^5 attempts to access callCount`
- `input function is sum, fib, or factorial`

## Memoization in JavaScript

Memoization is a technique used in programming to cache the results of expensive function calls and avoid redundant computations. In JavaScript, you can implement memoization to optimize the performance of functions that are called frequently with the same arguments. This can be particularly useful for functions that involve complex calculations or recursive algorithms.

Here's a simple example of memoization in JavaScript using an object to store cached results:

```javascript
// Example function to be memoized
function expensiveFunction(n) {
  console.log("Computing...", n);
  // Simulating some expensive computation
  return n + 10;
}

// Memoization function to wrap the expensive function
function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Cache hit!");
      return cache[key];
    }
    console.log("Cache miss!");
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}
const memoizedExpensiveFunction = memoize(expensiveFunction);
console.log(memoizedExpensiveFunction(5)); // Output: Computing... 5, Cache miss! -> 15
console.log(memoizedExpensiveFunction(5)); // Output: Cache hit! -> 15
console.log(memoizedExpensiveFunction(10)); // Output: Computing... 10, Cache miss! -> 20
console.log(memoizedExpensiveFunction(10)); // Output: Cache hit! -> 20
console.log(memoizedExpensiveFunction(5)); // Output: Cache hit! -> 15 (value is retrieved from cache)
```

In this example, we have an `expensiveFunction` that takes a number and returns the number plus 10. The `memoize` function wraps the `expensiveFunction` and adds memoization logic by using an object (`cache`) to store the results of previous function calls based on the arguments used.

When `memoizedExpensiveFunction` is called with the same arguments, it first checks if the result is already available in the `cache`. If so, it returns the cached result, avoiding re-computation. If not, it calls the `expensiveFunction` with the provided arguments, stores the result in the `cache`, and returns it.

Note that this simple memoization implementation works for functions that take primitive data types as arguments. If you have functions that take non-primitive data types (e.g., objects, arrays) as arguments, you may need to implement a more advanced memoization technique or use libraries that handle such cases efficiently.
