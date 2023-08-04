/**
 * To implement the debounce function, we need to keep track of the timer and
 * the last set of inputs. If a new call is made before the timer expires, we
 * need to clear the previous timer and set a new one with the updated inputs.
 * We'll use the setTimeout and clearTimeout functions to achieve this.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var debounce = function (fn, t) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

// Test cases
// let start = Date.now();
// function log(...inputs) {
//   console.log([Date.now() - start, inputs]);
// }

// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

// // For the second test case:
// const dlog2 = debounce(log, 20);
// setTimeout(() => dlog2(1), 50);
// setTimeout(() => dlog2(2), 100);

// // For the third test case:
// const dlog3 = debounce(log, 150);
// setTimeout(() => dlog3(1, 2), 50);
// setTimeout(() => dlog3(3, 4), 300);
// setTimeout(() => dlog3(5, 6), 300);

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1:
// Debounce a function that logs the arguments passed to it
let start = Date.now();
function log(...inputs) {
  console.log([Date.now() - start, inputs]);
}

const debouncedLog = debounce(log, 100);

debouncedLog(1, 2, 3); // This will be executed after 100ms and log [100, [1, 2, 3]]
debouncedLog(4, 5, 6); // This will cancel the previous call and schedule a new execution after 100ms
// After another 50ms, if no new call is made, it will log [150, [4, 5, 6]]

// Example 2:
// Debounce a function that fetches data from an API
const fetchData = async (query) => {
  const response = await fetch(`https://api.example.com/search?query=${query}`);
  const data = await response.json();
  console.log(data);
};

const debouncedFetchData = debounce(fetchData, 500);

debouncedFetchData("apple"); // This will fetch data after 500ms with the 'apple' query
// If the user keeps typing within 500ms, the previous fetch will be cancelled, and a new fetch with the latest query will be scheduled.

// Example 3:
// Debounce a function that updates a user's profile in the database
const updateUserProfile = (userId, newData) => {
  console.log(`Updating profile for user ${userId}:`, newData);
};

const debouncedUpdateProfile = debounce(updateUserProfile, 2000);

debouncedUpdateProfile(123, { name: "John Doe", age: 30 });
// This will update the user profile after 2000ms with the new data
// If the user makes more updates within 2000ms, the previous update will be cancelled, and a new update with the latest data will be scheduled.
