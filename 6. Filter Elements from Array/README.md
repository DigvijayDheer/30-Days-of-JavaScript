# Filter Elements from Array

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:

- `arr[i]` - number from the `arr`
- `i` - index of `arr[i]`

`filteredArr` should only contain the elements from the `arr` for which the expression `fn(arr[i], i)` evaluates to a **truthy** value. A **truthy** value is a value where `Boolean(value)` returns `true`.

Please solve it without the built-in Array.filter method.

### Example 1:

```javascript
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
```

### Example 2:

```javascript
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
```

### Example 3:

```javascript
Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
```

## Constraints:

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`

# FILTER IN JS

In JavaScript, you can filter elements from an array using the `filter()` method. The `filter()` method creates a new array with all elements that pass the condition specified by the provided callback function. Here's how you can use it:

Syntax:

```javascript
const newArray = originalArray.filter(callback(element[, index[, array]])[, thisArg])
```

Parameters:

- `callback`: A function that tests each element of the array. It should return `true` to include the element in the new array, or `false` to exclude it. It takes three arguments:

  - `element`: The current element being processed in the array.
  - `index` (optional): The index of the current element in the array.
  - `array` (optional): The array on which `filter` was called.

- `thisArg` (optional): Value to use as `this` when executing the callback function.

Example:

Let's say we have an array of numbers and we want to filter out all even numbers:

```javascript
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = originalArray.filter((element) => element % 2 !== 0);

console.log(newArray); // Output: [1, 3, 5, 7, 9]
```

In this example, the `filter()` method is used with an arrow function that checks if the element is not even (i.e., the remainder of dividing the element by 2 is not 0). The new array `newArray` will contain all the elements that meet this condition, which are the odd numbers from the original array.

You can customize the callback function according to your filtering requirements, like filtering out certain strings, objects, or elements based on specific conditions.
