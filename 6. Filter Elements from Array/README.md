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

### Hint:

1. Start by declaring a new array which will eventually be returned.
2. In Javascript, there is the concept of "truthiness" and "falsiness". Values such as 0, undefined, null, and false are falsy. Most values are truthy: 1, {}, [], true, etc. In Javascript, the contents of if-statements don't need to be booleans. You can say "if ([1,2,3]) {}", and it's equivalent to saying 'if (true) {}".
3. Loop over each element in the array. If fn(arr[i]) is truthy, push it to the array.

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

# PUSH IN JS

In JavaScript, "push" is a method used to add one or more elements to the end of an array. It is one of the fundamental array manipulation methods. The syntax for the "push" method is as follows:

```javascript
array.push(element1, element2, ..., elementN);
```

Here's what each part means:

- `array`: This is the array to which you want to add elements.
- `element1, element2, ..., elementN`: These are the elements you want to add to the end of the array. You can add one or multiple elements separated by commas.

Example 1: Pushing a single element into an array:

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");

console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
```

Example 2: Pushing multiple elements into an array:

```javascript
let numbers = [1, 2, 3];
numbers.push(4, 5, 6);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
```

The "push" method modifies the original array and returns the new length of the array after the elements are added. If you want to add elements to the beginning of an array, you can use the "unshift" method.
