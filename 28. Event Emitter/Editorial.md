## Solution

### Overview:

We are tasked with designing an `EventEmitter` class that allows for subscribing to events and emitting them. The `EventEmitter` should have the following two methods:

- `subscribe(eventName, callback)`: This method takes in the name of an event as a string and a `callback` function. The `callback` function will be called when the event is emitted. An event should be able to have multiple listeners for the same event. The callbacks should be called in the order they were subscribed. The `subscribe` method should return an object with an `unsubscribe` method that can be used to remove the `callback` from the list of subscriptions.
- `emit(eventName, args)`: This method takes in the name of an event as a string and an optional array of arguments. It should trigger the callbacks associated with the `eventName`, passing the provided arguments to each `callback`. If there are no callbacks subscribed to the given event, the method should return an empty array. Otherwise, it should return an array containing the results of all `callback` calls in the order they were subscribed.

### Before going any further let us understand meaning of few terms:

**Events and Event-driven Programming:**

- Events represent things that happen in a program. For example, when a user clicks a button, it triggers a "click" event.
- Event-driven programming focuses on responding to events rather than following a fixed sequence of steps. It allows programs to react to user interactions and external changes.
- **Example:** Imagine a game where the player's character moves when the arrow keys are pressed. The game uses `events` to detect key presses and update the character's position accordingly.

**EventEmitter:**

- An EventEmitter is a tool or class that manages events in a program. It allows components to subscribe to events and receive notifications when those events occur.
- **Example:** Think of an `EventEmitter` as a radio station. It broadcasts different types of shows (events), and listeners (components) can tune in to listen to specific shows they are interested in.

**Subscriptions and Callbacks:**

- Subscriptions allow components to express their interest in specific events. They specify which events they want to listen to.
- Callbacks, also known as event handlers, are functions that get executed when the subscribed event occurs.
- **Example:** In a messaging app, a user can subscribe to the "newMessage" event to receive notifications when a new message is received. The callback function could display the message on the screen.

```javascript
// Callback function for handling new messages
function handleMessageReceived(message) {
  console.log("New message received:", message);
}

// Subscribe the callback function to the "newMessage" event
eventEmitter.subscribe("newMessage", handleMessageReceived);
```

**Order of Callback Execution:**

- When multiple listeners subscribe to the same event, the callbacks are executed in the order they were subscribed.
- **Example:** Imagine a social media app where users can like a post. Each like triggers the "postLiked" event, and all subscribed callbacks should execute in the order they were registered.

**Unsubscribing from Events:**

- Subscriptions can be canceled or removed when components no longer want to receive event notifications.
- **Example:** In a notification system, users may want to unsubscribe from email notifications after they have configured their preferences.

```javascript
// Subscribe a callback function to an event and get the unsubscribe method
const subscription = eventEmitter.subscribe("eventName", callback);

// Unsubscribe from the event by calling the unsubscribe method
subscription.unsubscribe();
```

**Event Arguments:**

- Events can carry additional information or data, known as event arguments, which are passed to the callback functions.
- **Example:** In a weather app, the "weatherUpdate" event may include arguments such as temperature, humidity, and weather conditions. The callback function can use these arguments to update the UI.

```javascript
// Callback function for handling weather updates
function handleWeatherUpdate(weatherData) {
  console.log("Temperature:", weatherData.temperature);
  console.log("Humidity:", weatherData.humidity);
}

// Subscribe the callback function to the "weatherUpdate" event
eventEmitter.subscribe("weatherUpdate", handleWeatherUpdate);
```

**Return Values:**

- Callbacks can perform actions or computations and return values based on their functionality.
- **Example:** In a calculator app, a callback function subscribed to the "calculate" event may receive arguments like numbers and an operation. It can perform the calculation and return the result.

```javascript
// Callback function for handling calculations
function handleCalculation(numbers, operation) {
  if (operation === "add") {
    return numbers.reduce((a, b) => a + b, 0);
  } else if (operation === "multiply") {
    return numbers.reduce((a, b) => a * b, 1);
  }
}

// Subscribe the callback function to the "calculate" event
eventEmitter.subscribe("calculate", handleCalculation);
```

## Use Cases:

- **User Interface (UI) Interactions:** In web development, an `EventEmitter` can be used to handle user interactions such as button clicks, form submissions, or menu selections. Components can subscribe to these events and perform appropriate actions or updates when the events are emitted.

```javascript
// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Subscribe to a button click event
eventEmitter.subscribe("buttonClick", () => {
  console.log("Button clicked!");
});

// Emit the button click event
eventEmitter.emit("buttonClick");
```

- **Asynchronous Operations:** When working with asynchronous operations like fetching data from an API or handling database queries, an `EventEmitter` can be used to notify components or modules about the completion or status of these operations. Subscribed callbacks can then handle the returned data or trigger subsequent actions.

```javascript
// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Simulate an asynchronous operation
function fetchData() {
  setTimeout(() => {
    const data = "Some fetched data";
    // Emit the event with the fetched data
    eventEmitter.emit("dataFetched", data);
  }, 2000);
}

// Subscribe to the dataFetched event
eventEmitter.subscribe("dataFetched", (data) => {
  console.log("Data fetched:", data);
});
```
