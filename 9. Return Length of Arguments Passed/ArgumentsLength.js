var argumentsLength = function (...args) {
  var len = 0;
  for (var arg of args) len++;
  return len;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
