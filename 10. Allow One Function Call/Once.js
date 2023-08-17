/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function (fn) {
  let called = true;

  return (...args) => {
    if (called) {
      called = false;
      return fn(...args);
    }

    return undefined;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Example 1: Using once with a simple function
const sayHello = () => {
  console.log("Hello, world!");
};

const sayHelloOnce = once(sayHello);

sayHelloOnce(); // Output: "Hello, world!"
sayHelloOnce(); // Output: undefined
sayHelloOnce(); // Output: undefined
// The 'sayHello' function was called only once, subsequent calls return undefined.

// Example 2: Using once with a function that takes arguments
const sum = (a, b) => {
  return a + b;
};

const sumOnce = once(sum);

console.log(sumOnce(2, 3)); // Output: 5
console.log(sumOnce(5, 10)); // Output: undefined
console.log(sumOnce(1, 1)); // Output: undefined
// The 'sum' function was called only once, subsequent calls return undefined.

// Example 3: Using once with an asynchronous function
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};

const fetchDataOnce = once(fetchData);

fetchDataOnce().then((data) => {
  console.log(data);
  // Output: The fetched data from the API
});

fetchDataOnce().then((data) => {
  console.log(data);
  // Output: The fetched data from the API (since fetchData was called only once)
});

fetchDataOnce().then((data) => {
  console.log(data);
  // Output: The fetched data from the API (since fetchData was called only once)
});
