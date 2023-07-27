/* In JavaScript, you can create a counter using variables and functions. 
A counter is a simple mechanism that keeps track of a numeric value and 
allows you to increment or decrement it. Below is an example of how to 
create a basic counter in JavaScript: */

var createCounter = (n) => {
  var counter = n;
  return () => counter++;
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
