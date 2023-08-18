/**
 * @param {Function} fn
 * @return {Array}
 */

Array.prototype.groupBy = function (fn) {
  const grouped = {};

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const key = fn(item);

    if (!grouped[key]) {
      grouped[key] = [item];
    } else {
      grouped[key][grouped[key].length] = item;
    }
  }

  return grouped;
};

// Other Methods

// 1. Using forEach() method:
Array.prototype.groupBy = function (fn) {
  const grouped = {};

  this.forEach((item) => {
    const key = fn(item);

    if (!grouped[key]) {
      grouped[key] = [item];
    } else {
      grouped[key].push(item);
    }
  });

  return grouped;
};

// 2. Using reduce() method:
Array.prototype.groupBy = function (fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item);

    if (!grouped[key]) {
      grouped[key] = [item];
    } else {
      grouped[key].push(item);
    }

    return grouped;
  }, {});
};

// 3. Using for...of loop:
Array.prototype.groupBy = function (fn) {
  const grouped = {};

  for (const item of this) {
    const key = fn(item);

    if (!grouped[key]) {
      grouped[key] = [item];
    } else {
      grouped[key].push(item);
    }
  }

  return grouped;
};

// 4. Using Map:
Array.prototype.groupBy = function (fn) {
  const grouped = new Map();

  this.forEach((item) => {
    const key = fn(item);
    if (!grouped.has(key)) {
      grouped.set(key, [item]);
    } else {
      grouped.get(key).push(item);
    }
  });

  // Convert the Map to an Object
  const result = {};
  grouped.forEach((value, key) => {
    result[key] = value;
  });

  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// Sample 1
const array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];

// Define the callback function for grouping by 'id'
const fn1 = function (item) {
  return item.id;
};

// Call the groupBy function on array1 with the callback function
const result1 = array1.groupBy(fn1);
console.log(result1);

// Sample 2
const array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];

// Define the callback function for grouping by the first element of each sub-array
const fn2 = function (list) {
  return String(list[0]);
};

// Call the groupBy function on array2 with the callback function
const result2 = array2.groupBy(fn2);
console.log(result2);

// Sample 3
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define the callback function for grouping by whether a number is greater than 5
const fn3 = function (n) {
  return String(n > 5);
};

// Call the groupBy function on array3 with the callback function
const result3 = array3.groupBy(fn3);
console.log(result3);
