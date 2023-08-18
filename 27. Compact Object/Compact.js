/**
 * @param {Object} obj
 * @return {Object}
 */

var compactObject = function (obj) {
  function dfs(obj) {
    if (!obj) return false;
    if (typeof obj !== "object") return obj;
    if (Array.isArray(obj)) {
      const newArr = [];
      for (let i = 0; i < obj.length; i++) {
        const curr = obj[i];
        const subRes = dfs(curr);

        if (subRes) {
          newArr.push(subRes);
        }
      }
      return newArr;
    }

    const newObj = {};
    for (const key in obj) {
      const subRes = dfs(obj[key]);
      if (subRes) {
        newObj[key] = subRes;
      }
    }
    return newObj;
  }
  return dfs(obj);
};

// Example 1:
const obj1 = [null, 0, false, 1];
const compactObj1 = compactObject(obj1);
console.log(compactObj1);
// Output: [1]

// Example 2:
const obj2 = { a: null, b: [false, 1] };
const compactObj2 = compactObject(obj2);
console.log(compactObj2);
// Output: {"b": [1]}

// Example 3:
const obj3 = [null, 0, 5, [0], [false, 16]];
const compactObj3 = compactObject(obj3);
console.log(compactObj3);
// Output: [5, [], [16]]
