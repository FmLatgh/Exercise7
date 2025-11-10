# Scope Quiz


## Question 1

What will the code output to the console?

```javascript
let x = 10;

function test() {
    let x = 20;
    console.log(x);
}

test();
console.log(x);
```


## Question 2

What will the code output to the console?

```javascript
let x = 10;

function test() {
    if (x < 20) {
        x = 50;
    }
    console.log(x);
}

test();
console.log(x);
```


## Question 3

What will the code output to the console?

```javascript
let x = 10;
console.log(x);

if (true) {
   let x = 20;
   console.log(x);
}

console.log(x);
```

## Question 4

What will the code output to the console?

```javascript
function test() {

   function foo() {
       console.log('foo');
   }

   const bar = function () {
       console.log('bar');
   }

   foo();
   bar();

}

test();
```

## Question 5

Warning: NASTY ONE! Hoisting!

What will the code output to the console?

```javascript
function test() {
    foo();
    bar();

    function foo() {
        console.log('foo');
    }

    const bar = function () {
        console.log('bar');
    }
}

test();
```


