# Counter

## Description

Given an integer `n`, the counter function returns a closure that initially returns `n`, and then returns `1` more than the previous value every subsequent time it is called.

## Examples

### Example 1:

Input:

```javascript
n = (10)[("call", "call", "call")];
```

Output:

```javascript
[10, 11, 12];
```

Explanation:

```javascript
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
```

### Example 2:

Input:

```javascript
n = -(2)[("call", "call", "call", "call", "call")];
```

Output:

```javascript
[-2, -1, 0, 1, 2];
```

Explanation:

```javascript
counter() = -2 // The first time counter() is called, it returns n.
counter() = -1 // Returns 1 more than the previous time.
counter() = 0  // Returns 1 more than the previous time.
counter() = 1  // Returns 1 more than the previous time.
counter() = 2  // Returns 1 more than the previous time.
```

## Constraints

- `n` is an integer in the range from -1000 to 1000.
- At most 1000 calls to the counter function will be made.

## Hint

1. In JavaScript, a function can return a closure. A closure is defined as a function and the variables declared around it (its lexical environment).
2. A count variable can be initialized in the outer function and mutated in the inner function. This allows the inner function to "remember" the value of the count across multiple calls.
