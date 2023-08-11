/**===================================================================== */
// CODE
/**===================================================================== */

Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

const arr1 = [1, 2, 3];
console.log(arr1.last()); // Output: 3

const arr2 = ["apple", "banana", "orange"];
console.log(arr2.last()); // Output: 'orange'

const arr3 = [];
console.log(arr3.last()); // Output: -1

const arr4 = [null, {}, 3];
console.log(arr4.last()); // Output: 3
