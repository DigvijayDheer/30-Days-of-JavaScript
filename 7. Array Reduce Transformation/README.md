# Array Reduce Transformation

Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return a reduced array.

A reduced array is created by applying the following operation: `val = fn(init, nums[0])`, `val = fn(val, nums[1])`, `val = fn(val, nums[2])`, `...` until every element in the array has been processed. The final value of `val` is returned.

If the length of the array is 0, it should return `init`.

Please solve it without using the built-in `Array.reduce` method.

### Example 1:

```javascript
Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
```

### Example 2:

```javascript
Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0]^2 = 101
(101) + nums[1]^2 = 105
(105) + nums[2]^2 = 114
(114) + nums[3]^2 = 130
The final answer is 130.
```

### Example 3:

```javascript
Input:
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.
```

## Constraints:

- `0 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`
- `0 <= init <= 1000`

### Hint:

1. Declare a variable "res" and set it it equal to the initial value.
2. Loop over each value in the array and set "res" = fn(res, arr[i]).

# REDUCE IN JS

In JavaScript, the `reduce()` method is used to reduce an array to a single value by executing a provided function for each element of the array. The method iterates over the array and accumulates a single result based on the logic defined in the provided function.

The syntax for the `reduce()` method is as follows:

```javascript
array.reduce(callback[, initialValue]);
```

Here's what each part means:

- `array`: The array you want to reduce.
- `callback`: A function that will be executed for each element in the array, taking four arguments:
  - `accumulator`: The accumulator accumulates the callback's return values. It is the result of previous callback invocations or the `initialValue` if provided.
  - `currentValue`: The current element being processed in the array.
  - `currentIndex` (optional): The index of the current element being processed.
  - `array` (optional): The array on which `reduce` was called.
- `initialValue` (optional): An optional initial value to be used as the first argument to the first call of the callback. If not provided, the first element of the array will be used as the initial value, and the iteration will start from the second element.

Example 1: Summing up elements in an array using `reduce()`:

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

Example 2: Finding the maximum value in an array using `reduce()`:

```javascript
let numbers = [12, 45, 3, 27, 8];
let max = numbers.reduce((maxValue, currentValue) =>
  Math.max(maxValue, currentValue)
);

console.log(max); // Output: 45
```

In both examples, the `reduce()` method iterates over the array and performs the specified operation to reduce the array to a single value. The `accumulator` holds the intermediate result, which is updated in each iteration based on the logic provided in the callback function.
