# Allow One Function Call

Given a function `fn`, return a new function that is identical to the original function except that it ensures `fn` is called at most once.

- The first time the returned function is called, it should return the same result as `fn`.
- Every subsequent time it is called, it should return `undefined`.

### Example 1:

```javascript
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
```

### Example 2:

```javascript
Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
```

## Constraints:

- `1 <= calls.length <= 10`
- `1 <= calls[i].length <= 100`
- `2 <= JSON.stringify(calls).length <= 1000`

# LENGTH IN JS

In JavaScript, `length` is a property that is available on arrays, strings, and some other data structures. The `length` property represents the number of elements in an array or the number of characters in a string.

For Arrays:
The `length` property of an array returns the number of elements (i.e., the array's length). It is a zero-based index, which means it represents the highest index in the array plus one.

Example:

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // Output: 3
```

In the above example, the array `fruits` has three elements, so `fruits.length` will return `3`.

For Strings:
The `length` property of a string returns the number of characters in the string.

Example:

```javascript
let message = "Hello, world!";
console.log(message.length); // Output: 13
```

In this example, the string `message` has 13 characters, so `message.length` will return `13`.

It's important to note that for strings, the `length` property returns the count of characters, including spaces and any special characters present in the string. For arrays, it returns the number of elements in the array.
