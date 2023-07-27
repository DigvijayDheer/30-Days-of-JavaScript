var reduce = function (nums, fn, init) {
  if (!nums.length) return init;
  let res = init;

  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }

  return res;
};
