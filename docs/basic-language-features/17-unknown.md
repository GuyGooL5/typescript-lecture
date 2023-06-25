---
slug: unknown
title: The 'unknown' Type
description: The 'unknown' Type
---

# The `unknown` Type

The `unknown` type is very similar to the [`any` type](any), but it's much safer.  
The base assumption is the same - we don't know the type of the value.  

Here's an example of how `any` and `unknown` are similar:

```ts
let x: any = 10; // OK
x = "hello"; // OK
x = true; // OK

let y: unknown = 10; // OK
y = "hello"; // OK
y = true; // OK
```
## The core philosophy of `unknown`

As seen in the example above, `unknown` is very similar to `any`, but there's one major difference - you can't do anything with an `unknown` value unless the type is checked first.  

Here's an example of an `add` function that adds two unknown values:
```ts
function add(a: unknown, b: unknown) {
    return a + b;
    // Error: 'a' is of type 'unknown'.ts(18046)
    // Error: 'b' is of type 'unknown'.ts(18046)
}
```

We can't add two unknown values because the compiler doesn't know if they can be added.  
For example if we were to pass two objects,  the program would crash at runtime.  
This is a great safety mechanism that prevents us from making mistakes.

## How can we handle unknown values?

In TypeScript, there's a concept called [type guards](type-guards)(more on that later).  
Shortly put, a type guard is a realtime check that determines if a value is of a certain type.

To make the example above work, we can use a type guard to check if the values are numbers using the native [`typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):

```ts
function add(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") 
    return a + b;

  throw new Error("Parameters must be numbers");
}

add(10, 20); // OK
add("10", "20"); // TypeScript allows this, but the program will crash at runtime (as expected)
```


:::tip Error Handling

In JavaScript's nature, when we catch an error, we can't be sure what type of error it is since a catch block can catch any type of error.

Let's create a function that recurses `n` times and then throws a `RecursionEndError`:

```ts
class RecursionEndError extends Error {
    constructor() {
        super("Recursion ended");
    }
}

function recurse(n: number) {
    if (n === 0) throw new RecursionEndError();
    recurse(n - 1);
}
```

We would all argue that this function will throw a `RecursionEndError`.  
If we were to write a try/catch block using JavaScript, it'd look like this:

```js
try {
    recurse(10);
} catch (error) {
    // We're expecting a RecursionEndError, and we want to notify the user
    console.log("The recursion ended successfully", error.message);
}
```

This looks fine and dandy, but what would happen if we were to run the same code where `n` is -1?

```js
try {
    recurse(-1);
} catch (error) {
    // We're expecting a RecursionEndError
    // but we got an Uncaught RangeError: Maximum call stack size exceeded
    console.log("The recursion ended successfully", error.message);
}
```

This is a problem that can be better handled using TypeScript's `unknown` type.  
In the following example, we'll use the `unknown` type to catch any type of error:
```ts
try {
    recurse(10);
} catch (error: unknown) {
    console.log("The recursion ended successfully", error.message);
    // Error: 'error' is of type 'unknown'. ts(18046)
}
```
The compiler complains that `error` is of type `unknown`, which is good because we can't really be sure that `error` has a `message` property.

### So, how can we handle this?

We can, again, use type guards to check if `error` is an instance of `RecursionEndError` using the [`instanceof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof):

```ts
try {
    recurse(10);
} catch (error: unknown) {
    if (error instanceof RecursionEndError)
        console.log("The recursion ended successfully", error.message);

    else throw error; // I don't know what to do with this error, so I'll just throw it

}
```
When we use `instanceof`, TypeScript knows that `error` is of type `RecursionEndError` and we can safely access the `message` property. The IDE will also suggest the `message` property when we type `error.`.  
Note that it's exclusive to the same clause, in the `else` clause, `error` is still of type `unknown`.

![instanceof type guard example](/assets/17_fig-1.png)