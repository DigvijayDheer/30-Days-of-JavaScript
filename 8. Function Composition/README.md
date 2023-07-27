# Function Composition

Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that is the **function composition** of the array of functions.

The **function composition** of `[f(x), g(x), h(x)]` is `fn(x) = f(g(h(x)))`.

The **function composition** of an empty list of functions is the **identity function** `f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as output.

### Example 1:

```javascript
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 6
```

### Example 2:

```javascript
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
```

### Example 3:

```javascript
Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
```

## Constraints:

- `-1000 <= x <= 1000`
- `0 <= functions.length <= 1000`
- `all functions accept and return a single integer`

### Hint:

1. Start by returning a function that takes in a number and returns a number.
2. Call each of the functions in the correct order. Each time passing the output of the previous function into the next function.

# REDUCERIGHT IN JS

In JavaScript, the `reduceRight()` method is very similar to the `reduce()` method, but it reduces the array from right to left (i.e., from the last element to the first element), instead of from left to right. It is used to reduce an array into a single value, just like `reduce()`, but the order of iteration is reversed.

The syntax for the `reduceRight()` method is as follows:

```javascript
array.reduceRight(callback[, initialValue]);
```

Here's what each part means:

- `array`: The array you want to reduce from right to left.
- `callback`: A function that will be executed for each element in the array, taking four arguments (same as `reduce()`):
  - `accumulator`: The accumulator accumulates the callback's return values. It is the result of previous callback invocations or the `initialValue` if provided.
  - `currentValue`: The current element being processed in the array.
  - `currentIndex` (optional): The index of the current element being processed.
  - `array` (optional): The array on which `reduceRight` was called.
- `initialValue` (optional): An optional initial value to be used as the first argument to the first call of the callback. If not provided, the last element of the array will be used as the initial value, and the iteration will start from the second-to-last element.

Example 1: Concatenating elements in an array from right to left using `reduceRight()`:

```javascript
let words = ["Hello", " ", "World", "!"];
let message = words.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(message); // Output: "!World Hello"
```

Example 2: Flattening nested arrays from right to left using `reduceRight()`:

```javascript
let nestedArrays = [[1], [2, 3], [4, 5, 6]];
let flattened = nestedArrays.reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);

console.log(flattened); // Output: [4, 5, 6, 2, 3, 1]
```

In both examples, the `reduceRight()` method iterates over the array from right to left and performs the specified operation to reduce the array to a single value. The `accumulator` holds the intermediate result, which is updated in each iteration based on the logic provided in the callback function.
