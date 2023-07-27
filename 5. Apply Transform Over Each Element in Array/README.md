# Apply Transform Over Each Element in Array

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

### Example 1:

```javascript
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.
```

### Example 2:

```javascript
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
```

### Example 3:

```javascript
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
```

## Constraints:

- `0 <= arr.length <= 1000`
- `-109 <= arr[i] <= 109`
- `fn returns a number`

# JAVASCRIPT METHODS FOR TRANSFORMATION

### In JavaScript, you can apply a transformation over each element in an array using various methods like `map()`, `forEach()`, or `reduce()`. These methods allow you to perform an operation on each element of the array and create a new array with the transformed values.

Let's explore each of these methods:

### 1. Using `map()`:

The `map()` method creates a new array by calling a provided function on each element of the original array. It returns a new array with the results of the function applied to each element.

```javascript
const originalArray = [1, 2, 3, 4, 5];

// Using map to double each element
const transformedArray = originalArray.map((element) => element * 2);

console.log(transformedArray); // Output: [2, 4, 6, 8, 10]
```

### 2. Using `forEach()`:

The `forEach()` method allows you to iterate through each element of the array and perform an operation on it. However, it doesn't create a new array. Instead, it modifies the existing array in place.

```javascript
const originalArray = [1, 2, 3, 4, 5];

// Using forEach to double each element
originalArray.forEach((element, index, arr) => {
  arr[index] = element * 2;
});

console.log(originalArray); // Output: [2, 4, 6, 8, 10]
```

### 3. Using `reduce()`:

The `reduce()` method reduces the array to a single value, based on the logic provided in the reducer function. However, it can also be used to transform each element and create a new array.

```javascript
const originalArray = [1, 2, 3, 4, 5];

// Using reduce to double each element and create a new array
const transformedArray = originalArray.reduce((acc, element) => {
  acc.push(element * 2);
  return acc;
}, []);

console.log(transformedArray); // Output: [2, 4, 6, 8, 10]
```

All three methods are useful depending on your requirements. If you need a new array with transformed elements, `map()` is typically the most suitable choice. If you only want to modify the original array in place, you can use `forEach()`. If you want to reduce the array to a single value or perform more complex transformations, `reduce()` is the most versatile option.
