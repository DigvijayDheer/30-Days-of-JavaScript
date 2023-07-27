var filter = function (arr, fn) {
  var filteredArr = [];
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr[j++] = arr[i];
    }
  }
  return filteredArr;
};
