## Cache With Time Limit

Write a class that allows getting and setting key-value pairs, however a **time until expiration** is associated with each key.

The class has three public methods:

`set(key, value, duration):` accepts an integer `key`, an integer `value`, and a `duration` in milliseconds. Once the `duration` has elapsed, the key should be inaccessible. The method should return `true` if the same un-expired key already exists and `false` otherwise. Both the value and duration should be overwritten if the key already exists.

`get(key):` if an un-expired key exists, it should return the associated value. Otherwise it should return `-1`.

`count():` returns the count of un-expired keys.

#### Example 1:

```
Input:
["TimeLimitedCache", "set", "get", "count", "get"]
[[], [1, 42, 100], [1], [], [1]]
[0, 0, 50, 50, 150]
Output: [null, false, 42, 1, -1]
Explanation:
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
At t=50, key=1 is requested and the value of 42 is returned.
At t=50, count() is called and there is one active key in the cache.
At t=100, key=1 expires.
At t=150, get(1) is called but -1 is returned because the cache is empty.
```

#### Example 2:

```
Input:
["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
[[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
[0, 0, 40, 50, 120, 200, 250]
Output: [null, false, true, 50, 50, -1]
Explanation:
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
At t=50, get(1) is called which returned 50.
At t=120, get(1) is called which returned 50.
At t=140, key=1 expires.
At t=200, get(1) is called but the cache is empty so -1 is returned.
At t=250, count() returns 0 because the cache is empty.
```

#### Constraints:

- `0 <= key <= 109`
- `0 <= value <= 109`
- `0 <= duration <= 1000`
- `total method calls will not exceed 100`

#### Hint:

1. You can delay execution of code with "ref = setTimeout(fn, delay)". You can abort the execution with "clearTimeout(ref)"
2. When storing the values in the cache, also store a reference to the timeout. The timeout should clear the key from the cache after the expiration has elapsed.
3. When you set a key that already exists, clear the existing timeout.

## Time-based Cache or TTL Cache

In JavaScript, caching is a technique used to store data or the results of expensive computations so that they can be retrieved quickly and efficiently when needed again. Cache with time limit (also known as "Time-based Cache" or "TTL Cache") is a specific type of caching where the cached data or computations have an expiration time. Once the expiration time is reached, the cached data is considered stale and will be removed from the cache, ensuring that fresh data is fetched when needed again.

Let's illustrate Cache with Time Limit in JavaScript with a well-explained example:

**Example:** Caching API Responses with Time Limit

Imagine you have a web application that makes API calls to fetch data from a server. To optimize the performance of your application, you want to cache the API responses with a time limit, say 5 minutes. If the same API request is made within the next 5 minutes, you should retrieve the cached response instead of making a new API call. However, if 5 minutes have passed since the last cache, a new API call should be made to get fresh data and update the cache.

Here's how you can implement a simple cache with time limit in JavaScript:

```javascript
// Cache object to store API responses with their expiration time
const cache = {};

// Function to fetch data from the API or cache
async function fetchDataFromApi(endpoint) {
  if (cache[endpoint] && cache[endpoint].expiresAt > Date.now()) {
    console.log(`Fetching ${endpoint} data from cache.`);
    return cache[endpoint].data;
  }

  // If data is not in cache or expired, make an API call to fetch fresh data
  console.log(`Fetching ${endpoint} data from API.`);
  const response = await fetch(endpoint);
  const data = await response.json();

  // Store the fresh data in the cache with the expiration time (5 minutes from now)
  const expirationTime = Date.now() + 5 * 60 * 1000; // 5 minutes in milliseconds
  cache[endpoint] = { data, expiresAt: expirationTime };

  return data;
}

// Example usage:
async function main() {
  try {
    const data1 = await fetchDataFromApi("https://api.example.com/data1");
    // Use data1...

    // After 2 minutes
    const data2 = await fetchDataFromApi("https://api.example.com/data2");
    // Use data2...

    // After 6 minutes (data1 cache is expired, data2 cache is still valid)
    const data3 = await fetchDataFromApi("https://api.example.com/data1");
    // A new API call will be made to fetch fresh data for data1...
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

main();
```

In this example, the `fetchDataFromApi` function first checks if the data for the given `endpoint` exists in the cache and if it's not expired (i.e., the current time is before the `expiresAt` time). If the data is present and valid in the cache, it returns the cached data. Otherwise, it makes an API call to fetch fresh data, updates the cache with the new data and its expiration time, and returns the fresh data.

By using this cache with a time limit, you can significantly reduce the number of API calls and improve the performance of your web application. However, it's important to choose an appropriate time limit based on your specific use case to strike a balance between data freshness and cache efficiency.
