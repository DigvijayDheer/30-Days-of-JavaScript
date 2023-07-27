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