# Practice: Specialisation Web

## Learning goals
* You understand the concept of scope in JavaScript.
* You can explain the difference between function scope and block scope.

## Form teams of two
Find a partner to work with during this assignment.

## ASSIGNMENT 1: Quiz
1. Complete the quiz in `quiz_scope.md`.
2. Push the changes to your repository.
 
## ASSIGNMENT 2: Code
Complete the code in `exercise_scope/app.js`:

The code is a simulation of an online shopping cart.

You can run the code outside the browser by pressing the "Run" button.

The output is shown in the console and should be:

Cart Items:
\- Laptop: $1200
\- Phone: $800
Order confirmed for Alice
Total Price: $2000
Discount: $200
Final Price: $1800


### Instructions
Refactor (=improve) the code to limit the use of global variables (to improve the code readability and maintainability):
* Encapsulate variables and functions within objects.
* Use local variables wherever possible.
* Organize the code to improve readability and maintainability.
* Goals:
    * Keep the same functionality and output.
    * Ensure that variables and functions are only accessible where needed.
    * Avoid polluting the global namespace.

### Steps
1. Create an object literal for the shopping cart and add all functionality that belongs there (variables and functions!).
2. Create another object literal for the user and add all functionality that belongs there (variables and functions!).
3. Refactor the code to use local variables and avoid global variables (let or const).
4. Update the code to use the objects to interact with the shopping cart.
5. Test the code to ensure that it still works as expected.
6. Push the changes to your repository.
