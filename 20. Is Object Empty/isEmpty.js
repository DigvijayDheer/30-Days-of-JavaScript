/**===================================================================== */
// CODE
/**===================================================================== */

var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Sample Examples
const obj1 = {};
const obj2 = { name: "John", age: 30 };
const obj3 = { x: 5, y: 42 };
const obj4 = [null, false, 0];

console.log(isEmpty(obj1)); // Output: true
console.log(isEmpty(obj2)); // Output: false
console.log(isEmpty(obj3)); // Output: false
console.log(isEmpty(obj4)); // Output: false
