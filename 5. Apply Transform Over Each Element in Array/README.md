# Apply Transform Over Each Element in Array

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

#### Example 1:

```
Input: arr = [1,2,3], fn = function  plusone(n) { return  n + 1; }
Output: [2,3,4]
Explanation:
const  newArray = map(arr, plusone); // [2,3,4]
The  function  increases  each  value  in  the  array  by  one.
```

#### Example 2:

```
Input: arr = [1,2,3], fn = function  plusI(n, i) { return  n + i; }
Output: [1,3,5]
Explanation: The  function  increases  each  value  by  the  index  it  resides  in.
```

#### Example 3:

```
Input: arr = [10,20,30], fn = function  constant() { return  42; }
Output: [42,42,42]
Explanation: The  function  always  returns 42.
```

#### Constraints:

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`
- `fn returns a number`

#### Hint:

1. Start by creating an array that will eventually be returned.
2. Loop over each element in the passed array. Push fn(arr[i]) to the returned array.

# Different Methods of Javascript for transformation

> In JavaScript, you can apply a transformation over each element in an array using various methods like `map()`, `forEach()`, or `reduce()`. These methods allow you to perform an operation on each element of the array and create a new array with the transformed values.

Let's explore each of these methods:

#### 1. Using `map()`:

The `map()` method creates a new array by calling a provided function on each element of the original array. It returns a new array with the results of the function applied to each element.

```javascript
const originalArray = [1, 2, 3, 4, 5];

// Using map to double each element
const transformedArray = originalArray.map((element) => element * 2);
console.log(transformedArray); // Output: [2, 4, 6, 8, 10]
```

#### 2. Using `forEach()`:

The `forEach()` method allows you to iterate through each element of the array and perform an operation on it. However, it doesn't create a new array. Instead, it modifies the existing array in place.

```javascript
const originalArray = [1, 2, 3, 4, 5];

// Using forEach to double each element
originalArray.forEach((element, index, arr) => {
  arr[index] = element * 2;
});
console.log(originalArray); // Output: [2, 4, 6, 8, 10]
```

#### 3. Using `reduce()`:

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

## Solution

### Overview

This question is intended as an introduction to _**callbacks**_. A callback is defined as a function passed as an argument to another function. They are critical to understand as they are used frequently in almost any JavaScript codebase and are essential to writing reusable code.

#### Why Use Callbacks

The simple answer is they allow you to write code that can be reused across different use-cases.

Imagine you created an algorithm that sorts an array of numbers. Then you encounter a situation where you want to sort an array of people by their age. One option is to re-write the algorithm to handle arrays of people. However, a far better way is to have this function accept a callback that is expected to return a number. Then you can keep the core algorithm the same, and the user of the function simply passes `person => person.age` as the 2nd parameter.

Just about any generic algorithm can benefit from accepting callbacks. The standard JavaScript library and many 3rd party packages rely heavily on them. This particular question asks to reimplement the `Array.map` method, which is one of the most heavily used array methods in JavaScript. However, there are four small differences.

1.  `Array.map` is a method on the Array prototype. This implementation accepts the array as the 1st argument.
2.  The callback provided to `Array.map` passes a reference to the original array as the 3rd argument. This implementation's callback only accepts two arguments.
3.  `Array.map` optionally allows you pass a `thisArg` as the 2nd parameter. If provided, the passed callback will be bound to that context (assuming the callback isn't an arrow function as they can't be bound).
4.  `Array.map` is required to handle sparse arrays. For example, if you write code `let arr = Array(100); arr[1] = 1;`, `Array.map` will only look at index 1.

#### Approach 1: Write Values onto Initially Empty Array

In JavaScript, you can read and write to indices that aren't in the range `[0, arr.length)`. Just like with normal objects, accessing an index that doesn't exist returns `undefined`. Writing to an index that doesn't exist is generally discouraged because, besides being confusing, it can result in slow and unpredictable performance.

This approach takes ~250ms for 5M elements.

**Implementation**

```javascript
var map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};
```

#### Approach 2: For...in Loop

For...in loops are more commonly used to iterate over the keys on an object. However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays. For example, if you wrote `let arr = Array(100); arr[1] = 10;`, this approach would only transform the single element.

This approach takes ~1000ms for 5M elements. An interesting thing to note is that this is the most similar to how the built-in `Array.map` works. Because `Array.map` needs to handle sparse arrays, it is usually several times slower than an optimal custom implementation that assumes arrays aren't sparse.

**Implementation**

```javascript
var map = function (arr, fn) {
  const newArr = new Array(arr.length);
  for (const i in arr) {
    newArr[i] = fn(arr[i], Number(i));
  }
  return newArr;
};
```

#### Approach 3: Push Values onto Array

JavaScript arrays are confusingly named because traditionally arrays have a fixed sized. However in JavaScript arrays can have elements appended with an average O(1)O(1)O(1) time. You can build up a transformed array by appending each element to the end one-by-one.

This approach takes ~200ms for 5M elements.

**Implementation**

```javascript
var map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};
```

#### Approach 4: Preallocate Memory

You can create an empty array with some length using the `new Array(len)` constructor. Note that the memory is allocated but the array doesn't actually contain any elements.

This technique is more performant than appending elements to the end of the array. This is because whenever you push a value to an array, the array may not have enough memory allocated to it and it will need to be resized. This is an expensive operation. Initializing the memory upfront can result in much better performance.

This approach takes ~40ms for 5M elements.

**Implementation**

```javascript
var map = function (arr, fn) {
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};
```

#### Approach 5: 32 Bit Integer Array

JavaScript allows you to use [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays). These aren't like normal JavaScript arrays because they only allow specific data types and their size cannot be altered.

These are a useful tool when you want to store lots of data in a memory efficient way. Traditional arrays can take up significant amounts of memory because they are not fixed size and can store arbitrary data.

This approach takes ~20ms for 5M elements.

**Implementation**

```javascript
var map = function (arr, fn) {
  const newArr = new Int32Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};
```

#### Approach 6: In-Memory Transformation

To achieve optimal performance, you can simply reuse the memory already allocated to the first array.

It's important to note that it is generally discouraged for a function to modify the values passed to it. It can lead to unexpected bugs where the user of the function was not expecting that as a side-effect. The built-in `Array.map` does not modify the original array.

This approach takes ~10ms for 5M elements.

**Implementation**

```javascript
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};
```

#### Complexity Analysis

The following analysis applies to all of the approaches.

- **Time complexity:** O(N) where N is `arr.length`.

- **Space complexity:** O(N) where N is `arr.length`. The _**extra**_ space is O(1) for Approach 6.
