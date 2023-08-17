# Is Object Empty

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

## Solution

### Overview:

The task is to determine whether an input object or array is empty. An empty object should not contain any key-value pairs, while an empty array should not have any elements. The input is assumed to be the output of JSON.parse.

Before we go any further, let us first clarify a few points that you will hear a lot about:

- **JSON:**  
  [JSON (JavaScript Object Notation)](https://leetcode.com/problems/json-deep-equal/editorial/) is a popular data-interchange format that serves as a lightweight alternative to XML. It is widely used for transmitting and storing data in a structured format.  
  JSON consists of two main data structures: `objects` and `arrays`. The data is represented as a combination of key-value pairs, enclosed in curly braces `{}` for `objects`, and square brackets `[]` for `arrays`. The keys in an object must be `strings`, while the values can be any valid JSON data type, including `objects` and `arrays`.

**Example of a JSON Object:**

```json
{
  "name": "Pavitr Prabhakar",
  "age": 17,
  "city": "Mumbattan"
}
```

**Example of a JSON Array:**

```javascript
["Peter", "Gwen", "Miles"];
```

**JSON.parse():**  
`JSON.parse()` is a built-in JavaScript function that converts a JSON string into a JavaScript `object`, `array`or a primitive value (such as a string, number, boolean, or null). It takes a valid JSON string as input and returns a corresponding JavaScript `object`, `array` or primitive value. This allows developers to work with JSON data in a native JavaScript format.

**Example of using JSON.parse():**

```javascript
const jsonString = '{"name":"Pavitr Prabhakar","age"17,"city":"Mumbattan"}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Output: Pavitr Prabhakar
console.log(parsedObject.age); // Output: 17
console.log(parsedObject.city); // Output: Mumbattan
```

**Objects in JavaScript:**  
Objects are used to store collections of key-value pairs. The keys of an object can be any value that can be converted to a string, and the corresponding values can be of any data type, including objects and arrays.

**Example of using Objects:**

```javascript
const person = {
  name: "Pavitr Prabhakar",
  age: 17,
  city: "Mumbattan",
};
console.log(person.name); // Output: Pavitr Prabhakar
console.log(person.age); // Output: 17
console.log(person.city); // Output: Mumbattan
```

**Now how to find length or size?**  
In JavaScript, the `length` or `size` property is used to determine the number of elements in an array or the number of key-value pairs in an object. For arrays, the `length` property returns the highest numeric index plus one. For objects, the `length` property is not available, so we need to use other methods like `Object.keys()` to get the number of key-value pairs.

**Example of using length property:**

```javascript
const spiders = ["Peter", "Gwen", "Miles"];
console.log(spiders.length); // Output: 3

const person = {
  name: "Pavitr Prabhakar",
  age: 17,
  city: "Mumbattan",
};
console.log(Object.keys(person).length); // Output: 3
```

## Approaches:

- The first way is to use `JSON.stringify` to convert the input array/object to a string. If the array or object is empty, it returns a string with opening and closing braces or curly braces.
- The second approach is to use `Object.keys()` as suggested above to obtain the length and then verify if it is empty or not.
- The third approach is to just use a for loop iterator to check whether there is something to iterate, and if there is, it implies the object is not empty, and if there is nothing to iterate, it implies the object is empty.

### Approach 1: Using JSON.stringify

When you stringify an object using `JSON.stringify()`, the resulting JSON string will represent the object's key-value pairs as a string. In this context, the "length" property of the resulting string will represent the number of characters in the string, not the number of key-value pairs in the original object.

For example, consider the following object:

```javascript
const person = {
  name: "Pavitr Prabhakar",
  age: 17,
  city: "Mumbattan",
};
```

If you stringify this object using `JSON.stringify()`, it will produce the following JSON string:

```json
{ "name": "Pavitr Prabhakar", "age": 17, "city": "Mumbattan" }
```

The length of this JSON string will include the opening and closing curly braces, quotation marks, colons, and commas.

Thus in our case it should have a length of two i.e. for opening and closing braces/curly braces.

```javascript
var isEmpty = function (obj) {
  if (JSON.stringify(obj).length <= 2) return true;
  else return false;
};
```

#### Complexity Analysis:

- **Time complexity:** O(n), where `n` is the size of object
- **Space complexity:** O(n), where `n` is the size of object

### Approach 2: Using Object.keys

We can check the length of the keys using `Object.keys()` and if it's 0 then return true else false.

```javascript
var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};
```

#### Complexity Analysis:

- **Time complexity:** O(n), where `n` is the size of object
- **Space complexity:** O(n), where `n` is the size of object

### Approach 3: Using loop

If the array/object is not empty, the interpreter will enter the for-in loop, and therefore the first return statement false will be run and if it is empty, the interpreter will not enter the for-in loop, and so the second return statement true will be executed.

```javascript
var isEmpty = function (obj) {
  for (const _ in obj) return false;
  return true;
};
```

### Complexity Analysis:

The time and space is O(1) because we are just checking if we can enter the loop or not.

- **Time complexity:** O(1)
- **Space complexity:** O(1)

## Interview Tips:

- What is the difference between an empty object and an object with no properties?

  - An empty object refers to an object that does not have any key-value pairs. It means that the object does not contain any properties. On the other hand, an object with no properties still exists and may have properties in the future. It simply means that it currently does not have any properties defined.

- How can you check if an object is empty in JavaScript without using the length of its keys?

  - Another way to check if an object is empty without using the length of its keys is by using the Object.keys() method. This method returns an array of the object's own enumerable property names (keys). You can then check if the length of the array is zero to determine if the object is empty.

- What is a Plain Old JavaScript Object (POJO)?

  - A Plain Old JavaScript Object (POJO) is a term used to describe a simple JavaScript object that is created using the object literal syntax or the `Object()` constructor. It refers to an object that does not have any specialized behavior or methods inherited from custom prototypes or built-in JavaScript classes. POJOs are often used as data transfer objects (DTOs) or as simple containers for storing and accessing data.
