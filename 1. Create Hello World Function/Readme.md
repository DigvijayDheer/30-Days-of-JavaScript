# Hello World Function

## Description

The `createHelloWorld` function is designed to return a new function that will always return the string `Hello World`, regardless of the arguments passed to it.

## Signature

```javascript
function createHelloWorld(): () => string
```

## Examples

### Example 1

Input:

```javascript
const f = createHelloWorld();
```

Output:

```javascript
f(); // "Hello World"
```

Explanation:

The function returned by `createHelloWorld` should always return the string `Hello World` when invoked.

### Example 2

Input:

```javascript
const f = createHelloWorld();
```

Output:

```javascript
f({}, null, 42); // "Hello World"
```

Explanation:

Any arguments could be passed to the function, but it should still always return the string `Hello World`.

## Constraints

- The length of `args` array is in the `range [0, 10]`.
