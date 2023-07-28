/**===================================================================== */
// CODE
/**===================================================================== */

async function sleep(millis) {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });

  return res;
}

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Test Case 1. Testing with a small sleep time (10 milliseconds):
let t1 = Date.now();
sleep(10).then(() => {
  console.log("Test 1:", Date.now() - t1); // Expected output: Approximately 10
});

// Test Case 2. Testing with a medium sleep time (500 milliseconds):
let t2 = Date.now();
sleep(500).then(() => {
  console.log("Test 2:", Date.now() - t2); // Expected output: Approximately 500
});

// Test Case 3. Testing with a large sleep time (2000 milliseconds):
let t3 = Date.now();
sleep(2000).then(() => {
  console.log("Test 3:", Date.now() - t3); // Expected output: Approximately 2000
});

// Test Case 4. Testing with a very small sleep time (1 millisecond):
let t4 = Date.now();
sleep(1).then(() => {
  console.log("Test 4:", Date.now() - t4); // Expected output: Approximately 1
});

// Test Case 5. Testing with a negative sleep time (-100 milliseconds):
let t5 = Date.now();
sleep(-100).then(() => {
  console.log("Test 5:", Date.now() - t5); // Expected output: Approximately 0 (No sleep, resolves immediately)
});

// Test Case 6. Testing with a larger value (10000 milliseconds) and verifying if the function works asynchronously:
console.log("Test 6: Before sleep");
let t6 = Date.now();
sleep(10000).then(() => {
  console.log("Test 6:", Date.now() - t6); // Expected output: Approximately 10000
});
console.log("Test 6: After sleep, but before the promise resolves");
