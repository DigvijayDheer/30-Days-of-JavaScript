/**
 * This program defines a TimeLimitedCache class that acts as a cache for storing key-value pairs with a time-based expiration. It uses a Map data structure to store the key-value pairs and associated expiration timers for each key.
 * The TimeLimitedCache class has the following methods:
 * 1. `set(key, value, duration)`: This method sets a new key-value pair in the cache with a specified duration (in milliseconds) until expiration. If the key already exists in the cache, the method will update the existing value and reset the expiration timer. If the key already exists and has not expired, the method will return `false`, indicating that the key was already present. If the key did not exist or had already expired, it will return `true`.
 * 2. `get(key)`: This method retrieves the value associated with a given key from the cache. If the key exists and has not expired, it returns the value. If the key does not exist or has expired, it returns -1.
 * 3. `count()`: This method returns the count of non-expired keys currently present in the cache.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

/**
 * TimeLimitedCache constructor function. Creates a new TimeLimitedCache object with an internal Map to store key-value pairs.
 * @constructor
 */
var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * Sets a key-value pair in the cache with a specified duration until expiration.
 * If the key already exists in the cache, the method updates the value and resets the expiration timer.
 * @param {number} key - The key to be set in the cache.
 * @param {number} value - The value to be associated with the key in the cache.
 * @param {number} duration - The time until expiration in milliseconds.
 * @returns {boolean} - Returns true if the key is newly added or expired, false if the key was already present and not expired.
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentValue = this.cache.get(key);

  // Clear any existing timeout for the key to avoid duplicate timers.
  if (currentValue) {
    clearTimeout(currentValue.timeout);
  }

  // Set a new timeout for the key to automatically delete it after the specified duration.
  const timeout = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  // Update or add the key-value pair in the cache along with its timeout.
  this.cache.set(key, { value, timeout });

  // Return true if the key was already present and not expired, false otherwise.
  return !!currentValue;
};

/**
 * Retrieves the value associated with the given key from the cache.
 * @param {number} key - The key for which the value needs to be retrieved.
 * @returns {number} - Returns the value associated with the key if it exists and has not expired; otherwise, returns -1.
 */
TimeLimitedCache.prototype.get = function (key) {
  // Use optional chaining (?.) and nullish coalescing (??) to safely retrieve the value.
  return this.cache.get(key)?.value ?? -1;
};

/**
 * Returns the count of non-expired keys currently present in the cache.
 * @returns {number} - The count of non-expired keys in the cache.
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1:
var obj1 = new TimeLimitedCache();
obj1.set(1, 42, 1000); // false, key 1 added with value 42, expires after 1000ms
obj1.get(1); // 42, key 1 is still present and not expired
obj1.count(); // 1, only 1 key-value pair is present in the cache

// Example 2:
var obj2 = new TimeLimitedCache();
obj2.set(1, 42, 1000); // false, key 1 added with value 42, expires after 1000ms
obj2.set(2, 99, 500); // false, key 2 added with value 99, expires after 500ms
obj2.get(1); // 42, key 1 is still present and not expired
obj2.get(2); // 99, key 2 is still present and not expired
obj2.count(); // 2, both keys are present and not expired

// Example 3:

var obj3 = new TimeLimitedCache();
obj3.set(1, 42, 1000); // false, key 1 added with value 42, expires after 1000ms
setTimeout(() => {
  obj3.get(1); // -1, key 1 has expired, so it returns -1
  obj3.count(); // 0, all keys in the cache have expired
}, 1200);

/**
 * In these examples, we see how the TimeLimitedCache class behaves when adding
 * new key-value pairs, retrieving values, and counting the number of non-expired
 *  keys. The cache automatically expires keys after the specified duration has
 * passed, and it allows easy management of time-limited data storage.
 */
