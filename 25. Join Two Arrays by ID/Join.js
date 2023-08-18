/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function (arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);
  let i = 0,
    j = 0;
  const joinedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].id === arr2[j].id) {
      joinedArray.push({ ...arr1[i], ...arr2[j] });
      i++;
      j++;
      continue;
    }

    if (arr1[i].id < arr2[j].id) {
      joinedArray.push({ ...arr1[i] });
      i++;
      continue;
    }
    joinedArray.push({ ...arr2[j] });
    j++;
  }

  while (i < arr1.length) {
    joinedArray.push({ ...arr1[i] });
    i++;
  }

  while (j < arr2.length) {
    joinedArray.push({ ...arr2[j] });
    j++;
  }

  return joinedArray;
};

// Example 1:
const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const arr2 = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
  { id: 4, age: 28 },
];

console.log(join(arr1, arr2));

/**
 * Output:
 * [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie' },
    { id: 4, age: 28 }
   ]
 */

// Example 2:
const item1 = [
  { id: 2, name: "Bob" },
  { id: 4, name: "David" },
];

const item2 = [
  { id: 1, age: 25 },
  { id: 3, age: 30 },
  { id: 4, age: 28 },
];

console.log(join(item1, item2));

/**
 * Output:
[
  { id: 1, age: 25 },
  { id: 2, name: 'Bob' },
  { id: 3, age: 30 },
  { id: 4, name: 'David', age: 28 }
]
 */
