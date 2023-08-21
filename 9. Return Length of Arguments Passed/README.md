## Return Length of Arguments Passed

Write a function `argumentsLength` that returns the count of arguments passed to it.

#### Example 1:

```
Input: argsArr = [5]
Output: 1
Explanation: argumentsLength(5); // 1
One  value  was  passed  to  the  function  so  it  should  return 1.
```

#### Example 2:

```
Input: argsArr = [{}, null, "3"]
Output: 3
Explanation: argumentsLength({}, null, "3"); // 3
Three  values  were  passed  to  the  function  so  it  should  return 3.
```

#### Constraints:

- `argsArr is a valid JSON array`
- `0 <= argsArr.length <= 100`

## length in JavaScript

In JavaScript, `length` is a property that is available on arrays, strings, and some other data structures. The `length` property represents the number of elements in an array or the number of characters in a string.

#### For Arrays:

The `length` property of an array returns the number of elements (i.e., the array's length). It is a zero-based index, which means it represents the highest index in the array plus one.

**Example:**

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // Output: 3
```

In the above example, the array `fruits` has three elements, so `fruits.length` will return `3`.

#### For Strings:

The `length` property of a string returns the number of characters in the string.

**Example:**

```javascript
let message = "Hello, world!";
console.log(message.length); // Output: 13
```

In this example, the string `message` has 13 characters, so `message.length` will return `13`.

It's important to note that for strings, the `length` property returns the count of characters, including spaces and any special characters present in the string. For arrays, it returns the number of elements in the array.
