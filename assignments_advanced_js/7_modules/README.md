## HOW TO USE MODULES INSTEAD OF A LOT OF SCRIPT TAGS?
In main.html a lot of script tags are used to reference other code.

This can lead to a cluttered and hard to maintain codebase.

Modules can help organize and modularize your code, making it easier to maintain and debug your code.

In order to use modules, you need to use the `export` and `import` statements. The `export` statement allows you to export functions, variables, or objects from a module, while the `import` statement allows you to import those exports into another module.

To use modules instead of a bunch of script tags, you need to add only one script tag to your HTML file,
which will import the main module. This main module can then import other modules as needed.

Here's an example of how to use modules:

```javascript
// math.js module
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// main.js module
import { add, subtract } from "./math.js";

console.log(add(5, 2)); // output: 7
console.log(subtract(5, 2)); // output: 3
```

In the example above, we have two modules: `math.js` and `main.js`. The `math.js` module exports two functions: `

Using modules also helps with code organization, as you can group related functions and variables into separate modules.
This makes it easier to find and work with specific pieces of code.

Another advantage of using modules is that they allow for better encapsulation.
This means that variables and functions declared in a module are only accessible within that module, unless explicitly exported. This helps prevent conflicts between different parts of your code.

## Exercise
Rewrite 'exercise_ppt_game' by using modules instead of a lot of script tags:
* Open the console in Webstorm to install dependencies: `npm init`.
* Solve all todo's in the code.
* Open the console in Webstorm to run the tests: `npm test`.

## Extra challenge
* Rewrite `player.js` to use a class instead of two object literals.
* Name the class `Player`.
* The class should have a constructor that takes a name as an argument.
* In the constructor, set the lives property is set to 3.
* And the medikit property is set to false.
 
### About classes
Besides object literals, you can also use classes to create objects in JavaScript.

Classes are a way to define a blueprint for creating objects with similar properties and methods.

Here's an example of how to use classes:

```javascript
// user.js

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

export default User;
```
```javascript
// main.js
import User from "./user.js";

const userA = new User("Alice", 30);  // A new object is created using the User class, the constructor is called with the arguments "Alice" and 30
user.sayHello(); // output: Hello, my name is Alice

const userB = new User("Bob", 25);
user.sayHello(); // output: Hello, my name is Bob

```
