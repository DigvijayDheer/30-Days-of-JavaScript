var compose = function (functions) {
  return function (x) {
    if (!functions) return x;
    var res = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      res = functions[i](res);
    }
    return res;
  };
};

// var compose = function (functions) {
//   return function (x) {
//     if (functions.length === 0) {
//       return x;
//     }

//     return functions.reduceRight((result, fn) => fn(result), x);
//   };
// };

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
