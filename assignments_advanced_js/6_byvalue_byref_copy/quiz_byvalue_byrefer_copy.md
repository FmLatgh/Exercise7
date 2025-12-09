# JavaScript Quiz: Predict the Output

Test your understanding of JavaScript by predicting the output of the following code snippets. Write down what you think each code will output or what will happen when it is executed.

---
### Question 1
What will be displayed when this code runs?

```javascript
const names = ['John', 'Jane', 'Jack', 'Jill'];
names = ['James', 'Jenny', 'Jake', 'Jasmine'];
console.log(names);
```
Array(4) [ "John", "Jane", "Jack", "Jill" ]

### Question 2
What will be logged to the console?

```javascript
const names = ['John', 'Jane', 'Jack', 'Jill'];
names.push('Jenny');
console.log(names);
```
Array(5) [ "John", "Jane", "Jack", "Jill", "Jenny" ]

### Question 3
What will be the output of the following code?

```javascript
let arr = [10, 20, 30];
arr[100] = 1000;
console.log(arr.length);
```
101

### Question 4
What will be the output?

```javascript
let obj = { a: 1 };
let copy = obj;
obj.a = 2;
console.log(copy.a);
```
1

### Question 5
What will be logged to the console?

```javascript
let a = 5;
let b = a;
a = 10;
console.log(b);
```
5

### Question 6
What will be the output of the following code?

```javascript
function showDetails (title) {
    console.log(title);
    title = title.toUpperCase();
}

const title = "The Starry Night";
showDetails(title);
console.log(title);
```
The Starry Night

### Question 7
What will be the output of the following code?

```javascript
function showDetails (painting) {
    console.log(painting.title + " by " + painting.artist);
    painting.title = painting.title.toUpperCase();
}

const painting = {
    title: "The Starry Night",
    artist: "Vincent van Gogh"
};
showDetails(painting);

console.log(painting.title);
``` 
THE STARRY NIGHT

### Question 8
What will be the output of the following code?

```javascript
let original = {
    name: "Alice",
    age: 30,
    phone: [123456, 789012],
};

// Create a shallow copy
let copy = { ...original };

copy.name = "Bob";
copy.phone[0] = 654321;

console.log(original);
console.log(copy);
```
object {
  name: "Alice",
  age: 30,
  phone: Array [123456, 789012]
}

object {
  name: "Bob",
  age: 30,
  phone: Array(1) [654321]
}

### Question 9
What will be logged to the console?

```javascript
const obj = { a: 1, b: 2, };
const new_obj = Object.assign({}, obj);
console.log(new_obj); 
console.log(new_obj === obj);
```
Object { a: 1, b: 2 }
false

### Question 10
What will be the output of the following code?

```javascript
let person = {
  name: "John",
  hobbies: ["reading", "gaming"],
};

let shallowCopy = { ...person };
shallowCopy.hobbies.push("coding");

console.log(person.hobbies);
```
Object [ "reading", "gaming", "coding" ]

### Question 11
What will be logged to the console?

```javascript
let numbers = [1, 2, [3, 4]];

let deepCopy = JSON.parse(JSON.stringify(numbers));
deepCopy[2][0] = 99;

console.log(numbers[2][0]);
```
3

### Question 12
What will be logged to the console?

```javascript
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
}

let person1 = {
  name: "Alex",
  age: 30,
};

changeAgeAndReference(person1);

console.log(person1.age);
```
25

### Question 13
What will be logged to the console?

```javascript
let originalArray = [{ a: 1 }, { b: 2 }];
let shallowCopy = originalArray.slice();
shallowCopy[0].a = 99;

console.log(originalArray[0].a);
```
99

### Question 14
What will be logged to the console?

```javascript
let obj = {
    num: 1,
    str: "hello",
    arr: [1, 2, 3],
    nested: { a: 10 },
    func: function () {
        return "I am a function";
    },
};

let copy = JSON.parse(JSON.stringify(obj));

console.log(typeof copy.func);
```
undefined