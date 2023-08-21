## Is Object Empty

Given an object or an array, return if it is empty.

- An empty object contains no key-value pairs.
- An empty array contains no elements.

You may assume the object or array is the output of `JSON.parse`.

#### Example 1:

```
Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
```

#### Example 2:

```
Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
```

#### Example 3:

```
Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
```

#### Constraints:

- ` 2 <= JSON.stringify(obj).length <= 10^5`

> Solve it in O(1) time.

## Object.keys() in JavaScript

`Object.keys()` is a built-in method in JavaScript that is used to extract an array of keys (property names) from a given object. It is often used to iterate over the properties of an object when their names are not known in advance or to perform operations on the keys themselves.

Here's a detailed explanation of how `Object.keys()` works:

**Syntax:**

```javascript
Object.keys(object);
```

**Parameters:**

- `object`: The object whose enumerable properties' keys you want to extract.

**Return Value:**
An array containing all the enumerable property names of the object.

**Usage:**

```javascript
const myObject = {
  name: "John",
  age: 30,
  gender: "male",
};

const keysArray = Object.keys(myObject);
console.log(keysArray); // Output: ['name', 'age', 'gender']
```

In this example, the `Object.keys()` method is called on the `myObject` object, and it returns an array containing the keys `'name'`, `'age'`, and `'gender'`.

Here are a few important points to note:

1. The `Object.keys()` method only considers enumerable properties (those properties that can be iterated over using loops) of an object. Non-enumerable properties won't be included in the resulting array.

2. The order of the keys in the array is determined by the order in which they were added to the object. However, this order is not guaranteed across different JavaScript engines or environments.

3. `Object.keys()` only operates on the object's own properties and does not traverse the prototype chain.

4. If you pass `null` or `undefined` as the parameter, a `TypeError` will be thrown.

5. It's common to use `Object.keys()` in combination with a loop (e.g., `forEach`, `for...of`) to iterate over the keys and perform operations on the corresponding values.

**Example: Using Object.keys() to iterate over object properties:**

```javascript
const myObject = {
  name: "Alice",
  age: 25,
  occupation: "Engineer",
};

const keysArray = Object.keys(myObject);

keysArray.forEach((key) => {
  console.log(`${key}: ${myObject[key]}`);
});
```

In this example, the `forEach` loop iterates over the keys in the `keysArray` and retrieves the corresponding values from the `myObject` using square bracket notation.

In summary, `Object.keys()` is a useful method in JavaScript for extracting the keys (property names) of an object and working with them, especially in scenarios where you need to dynamically access or manipulate the object's properties.
