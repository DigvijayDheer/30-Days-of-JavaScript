## Solution

### Overview

This question is intended as an introduction to _**closures**_ and _**objects**_. It is recommended that you first read the editorial for [counter](https://leetcode.com/problems/counter/editorial/) is it contains basic information about closures not discussed here.

#### JavaScript Objects

At their core, _**objects**_ are just mappings from strings to other values. The values can be anything: strings, functions, other objects, etc. The string that maps to the value is called the _**key**_.

```javascript
const object = {
  num: 1,
  str: "Hello World",
  obj: {
    x: 5,
  },
};
```

There are three ways to access values on an object:

1.  _**Dot Notation**_.

```javascript
const val = object.obj.x;
console.log(val); // 5
```

2.  _**Bracket Notation**_. This is used when the key isn't valid variable name. For example `".123"`.

```javascript
const val = object["obj"]["x"];
console.log(val); // 5
```

3.  _**Destructuring Syntax**_. This is most useful when accessing multiple values at once. You can read more about the syntax [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```javascript
const { num, str } = object;
console.log(num, str); // 1 "Hello World"
```

You can read more about objects [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects).

#### Classes and Prototypes

You can also define _**classes**_ in JavaScript. The classes's constructor returns an object which is an instance of that class.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("My name is", this.name);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); // Logs: "My name is Alice"
```

JavaScript implements classes with special objects call `prototypes`. All the methods (in this case `greet`) are functions stored on the object's prototype.

To make this concrete, the behavior of the above code could be replicated with the following code:

```javascript
const alice = {
  name: "Alice",
  age: 25,
  __proto__: {
    greet: function () {
      console.log("My name is", this.name);
    },
  },
};
alice.greet(); // Logs: "My name is Alice"
```

Looking at this code, you might wonder "How can you access the greet method even though it's not a key on the alice object"?

The reason is that accessing keys on an object is actually slightly more complicated than just looking at the object's keys. There is actually an algorithm that traverse the _**prototype chain**_. First, JavaScript looks at the keys on the object. If the requested key wasn't found, it then looks on the keys of the prototype object. If it still wasn't found, it looks at the prototype's prototype, and so on. This is how _**inheritance**_ is implemented in JavaScript!

You might also wonder why JavaScript has this strange prototype concept at all. Why not just store the functions on the object itself? The answer is efficiency. Every time a new `Person` is created, `age` and `name` fields are added to the object. However only a single _**reference**_ to the prototype object is added. So no matter how many instances of `Person` are created or how many methods are on the class, only a single prototype object is generated.

You can read more about classes [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

#### Proxies

An infrequently used but powerful feature of javascript is the _**proxy**_. They allow you to override the default behavior of objects.

For example, to implement the `alice` object with proxies:

```javascript
const alice = new Proxy(
  { name: "Alice", age: 25 },
  {
    get: (target, key) => {
      if (key === "greet") {
        return () => console.log("My name is", target.name);
      } else {
        return target[key];
      }
    },
  }
);
alice.greet(); // Logs: "My name is Alice"
```
