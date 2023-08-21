## Solution

### Overview

This question asks you to write a function that modifies a provided function such that the provided function will only be called if the arguments have not been passed before. If they have been passed before, it should return the previous output without calling the provided function. This type of optimization is called _**memoization**_ and is an extremely important example of a _**higher-order function**_.

To give a concrete example of memoization, here is some code without memoization.

```javascript
let callCount = 0;
const add = (a, b) => {
  callCount += 1;
  return a + b;
};

add(2, 2); // 4
console.log(callCount); // 1
add(2, 2); // 4
console.log(callCount); // 2
add(2, 2); // 4
console.log(callCount); // 3
```

As expected, `callCount` is incremented every time `add` is called.

However if we apply _**memoization**_:

```javascript
let callCount = 0;
const add = (a, b) => {
  callCount += 1;
  return a + b;
};
const memoizedAdd = memoize(add);

memoizedAdd(2, 2); // 4
console.log(callCount); // 1
memoizedAdd(2, 2); // 4
console.log(callCount); // 1
memoizedAdd(2, 2); // 4
console.log(callCount); // 1
```

We can see that `callCount` was only incremented the first time `memoizedAdd` was called. Each subsequent time `(2, 2)` was passed, the memoization logic detected that those arguments were passed before and it instead immediately returned the cached value (`4`) without calling `add`.

Avoiding adding 2 numbers is obviously not much of an optimization, but you could imagine memoizing a more complex function could result in serious performance gains.

#### Pure Functions

It is important to note that memoization only works correctly for _**pure functions**_. A pure function is defined as function that always returns the same output given the same inputs and doesn't have any side-effects.

For example, suppose you attempted to memoize the impure function `Date.now` which returns the current time in milliseconds since the [unix epoch](https://en.wikipedia.org/wiki/Unix_time).

```javascript
const getCurrentTimeMemoized = memoize(Date.now);

getCurrentTimeMemoized(); // 1683784131157
getCurrentTimeMemoized(); // 1683784131157
getCurrentTimeMemoized(); // 1683784131157
```

`getCurrentTimeMemoized` correctly returns the current time the first time it is called. But each subsequent time, it incorrectly returns the same value.

Similarly, suppose you have a function with a side-effect like uploading data to a database.

```javascript
function uploadRow(row) {
  // upload logic
}

const memoizedUpload = memoize(uploadRows);
memoizedUpload("Some Data"); // successful upload
memoizedUpload("Some Data"); // nothing happens
```

The first time `memoizedUpload`, data is correctly uploaded to the database, but each subsequent time, nothing will happen.

The fact you can only apply this optimization on pure functions is a good reason to try to make functions pure when possible.

#### Memoization Use-cases in Web Development

There are countless use-cases of memoization but we can discuss a few.

##### Caching Website Files

A large website often consists of many JavaScript files which are dynamically downloaded when a user visits different pages. A pattern is sometimes employed where the filename is based on a [hash](https://en.wikipedia.org/wiki/Hash_function) of the file's content. That way, when the web browser requests a filename that was already requested before, it can load the file locally from disk rather than have to download it again.

##### React Components

_**React**_ is a highly popular library for building user interfaces, especially for single-page applications. One of its core principles is the idea of breaking down your application into separate _**components**_. Each of these components is responsible for rendering a distinct part of the app's HTML.

For example you might have a component like this:

```javascript
const TitleComponent = (props) => {
  return <h1>{props.title}</h1>;
};
```

The above function will get called every time the parent component renders, even if `title` was not changed. Performance can be improved by calling `React.memo` on it, avoiding unnecessary renders.

```javascript
const TitleComponent = React.memo((props) => {
  return <h1>{props.title}</h1>;
});
```

Now, `TitleComponent` will only re-render if the `title` has changed, thereby improving the performance of the application.

##### Caching API Calls

Suppose you had a function that sends a network request to an API to access key-value pairs in a database.

```javascript
async function getValue(key) {
  const response = await fetch(`https://api.example.com/data?key=${key}`);
  const data = await response.json();
  return data.value;
}
```

If you're frequently making requests for the same keys, you can enhance the performance of this function by memoizing it. Here's how you can do it:

```javascript
async function memoizedGetValue(key) {
  if (!memoizedGetValue.cache) {
    memoizedGetValue.cache = {};
  }

  if (memoizedGetValue.cache[key] !== undefined) {
    return memoizedGetValue.cache[key];
  }

  const response = await fetch(`https://api.example.com/data?key=${key}`);
  const data = await response.json();

  memoizedGetValue.cache[key] = data.value;
  return memoizedGetValue.cache[key];
}
```

In this example, the `memoizedGetValue` function stores its cache as a property of the function itself. When the function is called with a key, it first checks if the key exists in the cache. If it does, it returns the cached value. If not, it fetches the data from the API, stores it in the cache, and returns the value.

This approach prevents unnecessary API calls for the same key and improves the performance of the function, especially in cases where the same key is requested multiple times.

Memoization is a powerful technique that can be applied in various scenarios to optimize the performance of functions, especially when dealing with expensive computations or remote data fetching. However, it's important to remember that memoization should only be used with pure functions, as impure functions can lead to unexpected behavior when memoized.
