class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const subscription = {
      callback,
      unsubscribe: () => {
        const eventSubscriptions = this.events.get(eventName);
        const index = eventSubscriptions.indexOf(subscription);
        if (index !== -1) {
          eventSubscriptions.splice(index, 1);
        }
      },
    };

    this.events.get(eventName).push(subscription);
    return subscription;
  }

  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [];
    }

    const eventSubscriptions = this.events.get(eventName);
    const results = [];

    for (const subscription of eventSubscriptions) {
      results.push(subscription.callback(...args));
    }

    return results;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

// Test cases: 1
const actions = ["EventEmitter", "subscribe", "emit", "emit"];
const values = [
  [],
  ["firstEvent", "(...args) => args.join(',')"],
  ["firstEvent", [1, 2, 3]],
  ["firstEvent", [3, 4, 6]],
];
const output = [];

let emitter;
for (let i = 0; i < actions.length; i++) {
  const action = actions[i];
  const value = values[i];

  if (action === "EventEmitter") {
    emitter = new EventEmitter();
    output.push([]);
  } else if (action === "emit") {
    const eventName = value[0];
    const args = value[1] || [];
    const results = emitter.emit(eventName, args);
    output.push(["emitted", results]);
  } else if (action === "subscribe") {
    const eventName = value[0];
    const callback = eval(value[1]);
    const subscription = emitter.subscribe(eventName, callback);
    output.push(["subscribed"]);
  }
}

console.log(output);

// Test Case: 2
// Create an instance of EventEmitter
const newEmitter = new EventEmitter();

// Subscribe to the 'click' event with a callback
function onClickCallback() {
  return "Click event was triggered";
}
const clickSubscription = newEmitter.subscribe("click", onClickCallback);

// Subscribe to the 'hover' event with another callback
function onHoverCallback() {
  return "Hover event was triggered";
}
const hoverSubscription = newEmitter.subscribe("hover", onHoverCallback);

// Emit the 'click' event and see the callbacks in action
console.log(newEmitter.emit("click")); // Output: ['Click event was triggered']

// Emit the 'hover' event and see the callbacks in action
console.log(newEmitter.emit("hover")); // Output: ['Hover event was triggered']

// Unsubscribe from the 'click' event
clickSubscription.unsubscribe();

// Emit the 'click' event after unsubscribing
console.log(newEmitter.emit("click")); // Output: []

// Unsubscribe from the 'hover' event
hoverSubscription.unsubscribe();

// Emit the 'hover' event after unsubscribing
console.log(newEmitter.emit("hover")); // Output: []

// Subscribe to the 'data' event with an anonymous callback
const dataSubscription = newEmitter.subscribe(
  "data",
  () => "Data event was triggered"
);

// Emit the 'data' event and see the callback in action
console.log(newEmitter.emit("data")); // Output: ['Data event was triggered']

// Unsubscribe from the 'data' event
dataSubscription.unsubscribe();

// Emit the 'data' event after unsubscribing
console.log(newEmitter.emit("data")); // Output: []
