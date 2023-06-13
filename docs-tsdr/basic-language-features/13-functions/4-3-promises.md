---
slug: functions-3
sidebar_label: Promises
description: Typing Funcitons - Promises
---

# Functions - Promises

In this section we will learn how to type promises.

## Promises Recap

Promises are a way to handle asynchronous operations in JavaScript. More on promises [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Typing Promises

Promises are typed using the `Promise` generic type.

:::info A quick Disclosure
I know this is the second time we are seeing a generic type without covering it.  
Bear with me for now and just know that the `Promise` type is a magical type that takes another type as a parameter, which is the type of the value that the promise will resolve to.
:::

For example a promise that resolves to a number will be typed as `Promise<number>`.  
A promise that resolves without a value will be typed as `Promise<void>`.
A promise that resolves to an array of strings will be typed as `Promise<string[]>`.
And so on...


## Typing Asynchronous Functions

Asynchronous functions are functions that return a promise.  
We can type asynchronous functions in two ways:
1. Using the `Promise` type
2. Using the `async` keyword

### Using the `Promise` type

To type an asynchronous function using the `Promise` type, we need to type the return type of the function as `Promise<T>`, where `T` is the type of the value that the promise will resolve to.

```ts
function getNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}
```

tip::: Implicit is better than Explicit (most of the time)

We already know that TypeScript can infer the type of a variable from its value and that it can infer the return type of a function from its return statement.

Instead of declaring the return type of the function to be a `Promise<number>`, we can let TypeScript infer it from the return statement.

```ts
function getNumber() {
    return new Promise<number>((resolve, reject) => {
        resolve(1);
    });
}
```
In the example above, TypeScript will infer the return type of the function to be `Promise<number>` this is the type type of the value that the promise will resolve to.

Actually, we can do better than that:
    
```ts
function getNumber() {
    return new Promise((resolve)=> {
        resolve(1);
    });
}
```
In the example above, TypeScript can infer the resolved value of the promise from the value passed to the `resolve` function to be a number, so it will infer that the type of the promise is `Promise<number>` and thus the return type of the function is `Promise<number>`.

:::

## `async/await` Functions

Functions declared with the `async` keyword are always asynchronous functions and always return a promise.

Just like returning a `Promise` object, we can either explicitly type the return type of the function as `Promise<T>` or let TypeScript infer it from the return statement.

```ts

async function getNumber(): Promise<number> {
    return 1;
}

async function getNumberInferred() {
    return 1;
}
```
In both cases, TypeScript "knows" that the return type of the function is `Promise<number>`.

:::tip TypeScript is really smart

We know that TypeScript can infer the return type of a function from its return statement.  
But it can go really deep, for example we can take the example of returning a `Promise` object and chain a `then` method to it, and TypeScript will infer the return type of the function to be the type of the value that the `then` method will resolve to.

```ts

function getNumber() /* Promise<string> */ {
    return new Promise((resolve)=> {
        resolve(1);
    }).then((value) => `${value}`);
} 
```

In the example above, TypeScript will infer the return type of the function to be `Promise<string>` because the `then` method will resolve to a string.

This can go as deep as you want:
```ts

function getNumber() /* Promise<string[]> */ {
  return new Promise((resolve) => {
    resolve(1);
  })
    .then((value) => `${value}`)
    .then((value) => [value, value, value, value]);
}

```
Note that both examples above are pure JavaScript, TypeScript is coherently inferring the return type of the function from the return statement.
