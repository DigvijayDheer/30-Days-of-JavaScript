## Solution

### Overview

This question asks you to add the _**groupBy**_ method to all arrays. Consider reading the **_Array Last Editorial_** for more information on adding methods by modifying the prototype object.

The `groupBy` operation accepts a callback function and returns a new object. The keys on this object are all the unique outputs of the callback function when it is applied to all the items in the array. Each key should have an associated array value. This array should contain all the values in the original array where the callback function returned that same key (sorted by the original order).

Note that the `groupBy` by method isn't built-in by default, so the example code will only run if the method is added to the Array prototype. Also you can see Lodash's popular implementation [here](https://lodash.com/docs/4.17.15#groupBy).

To give a concrete example of `groupBy` in action:

```javascript
const list = [
  { name: "Alice", birthYear: 1990 },
  { name: "Bob", birthYear: 1972 },
  { name: "Jose", birthYear: 1999 },
  { name: "Claudia", birthYear: 1974 },
  { name: "Marcos", birthYear: 1995 },
];
const groupedByDecade = list.groupBy((person) => {
  const decade = Math.floor(person.birthYear / 10) * 10;
  return String(decade);
});
console.log(groupedByDecade);
/*
 {
  "1990": [
  { name: 'Alice', birthYear: 1990 },
  { name: 'Jose', birthYear: 1999 },
  { name: 'Marcos', birthYear: 1995 }
  ],
  "1970": [
  { name: 'Bob', birthYear: 1972 },
  { name: 'Claudia', birthYear: 1974 }
  ]
 }
 */
```

### Use-cases for the Group Operation

Grouping a list is an extremely common thing to need to do front-end development and software engineering in general. Here are are few example use-cases.

#### Build Hierarchical Trees

If you want to build a tree of data, you can use perform `groupBy` on the list, and then `groupBy` on the values of the resulting object, and so on. This will result in a tree data structure that could be further used in algorithms where you need efficient lookup based on several keys. Or the tree could be used as an input to a tree visualization like some sort of expandable list.

Some example code that builds this tree:

```javascript
function buildTree(list, keys, index = 0) {
  if (index >= keys.length) return list;
  const group = list.groupBy((item) => item[keys[index]]);
  Object.keys(group).forEach((key) => {
    const list = group[key];
    group[key] = buildTree(list, keys, index + 1);
  });
  return group;
}

buildTree(
  [
    { a: 1, b: 2 },
    { a: 1, b: 3 },
  ],
  ["a", "b"]
);
/*
 {
  "1": {
  "2": [{a: 1, b: 2}],
  "3": [{a: 1, b: 3}]
  }
 }
 */
```

#### Join Data on Two Lists

Frequently, you have multiple lists of data, but you need to efficiently merge them into one list for use by some algorithm or user interface. In the context of database, this is considered a [join](<https://en.wikipedia.org/wiki/Join_(SQL)>) but you frequently need to do this in regular code as well.

The following examples shows how you could combine `decades` data with `people` data to create a `decadesWithPeople` variable.

```javascript
const people = [
  { name: "Alice", birthYear: 1990 },
  { name: "Bob", birthYear: 1972 },
  { name: "Jose", birthYear: 1999 },
  { name: "Claudia", birthYear: 1974 },
  { name: "Marcos", birthYear: 1995 },
];

const decades = [
  { start: 1970, theme: "Disco" },
  { start: 1980, theme: "Arcades" },
  { start: 1990, theme: "Beanie Babies" },
];

const groupedByDecade = list.groupBy((person) => {
  const decade = Math.floor(person.birthYear / 10) * 10;
  return String(decade);
});

const decadesWithPeople = decades.map((decadeData) => ({
  ...decadeData,
  people: groupedByDecade[decadeData.start.toString()] || [],
}));

console.log(decadesWithPeople);
/*
[
  {
    start: 1970,
    theme: 'Disco',
    people: [
      { name: 'Bob', birthYear: 1972 },
      { name: 'Claudia', birthYear: 1974 }
    ]
  },
  {
    start: 1980,
    theme: 'Arcades',
    people: []
  },
  {
    start: 1990,
    theme: 'Beanie Babies',
    people: [
      { name: 'Alice', birthYear: 1990 },
      { name: 'Jose', birthYear: 1999 },
      { name: 'Marcos', birthYear: 1995 }
    ]
  }
]
*/
```

In this continuation, we've used the `groupBy` operation to group people by birth decade, then combined this data with the decades information. The result is an array of objects representing each decade with its associated theme and the people born in that decade.

Remember, if you want to implement the `groupBy` method for arrays in JavaScript, you'll need to modify the prototype of the `Array` object. Here's a simplified version of the implementation:

```javascript
if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function (callback) {
    const result = {};
    this.forEach((item) => {
      const key = callback(item);
      if (!result[key]) {
        result[key] = [item];
      } else {
        result[key].push(item);
      }
    });
    return result;
  };
}
```
