/**
 * @param {number[]} nums
 */

// Approach 1:
// var ArrayWrapper = (nums) => {
//   this.nums = nums;
// };

// ArrayWrapper.prototype.valueOf = function () {
//   return this.nums.reduce((sum, num) => sum + num, 0);
// };

// ArrayWrapper.prototype.toString = function () {
//   return `[${this.nums.join(",")}]`;
// };

// Approach 2:
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

// Example 1: Adding two ArrayWrapper instances
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // Output: 10

// Example 2: Using the toString() method
const obj3 = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj3)); // Output: "[23,98,42,70]"

// Example 3: Empty arrays
const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
console.log(obj4 + obj5); // Output: 0
console.log(String(obj4)); // Output: "[]"
console.log(String(obj5)); // Output: "[]"
