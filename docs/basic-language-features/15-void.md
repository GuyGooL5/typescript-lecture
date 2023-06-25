---
slug: void
title: The 'void' Type
description: The 'void' Type
---

# The `void` Type

`void` is a special type that represents the absence of a value.  
It is used when a function doesn't return anything.  

```ts
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}
greet("John"); // This is okay and the return value is ignored
```

:::caution
`void` is a type that can only have values of the following two types: `undefined` and `void`.
That means you can assign `undefined` to a variable of type `void`.  
**BUT you can't assign `void` to a variable of type `undefined`**.

```ts
let x: void = undefined; // OK
let y: undefined = x; // Type 'void' is not assignable to type 'undefined'
```

In general don't use `void` as a type for variables, it's a special type dedicated to functions that don't return anything.  
Also avoid assigning function return values to variables of type `void`.
```ts
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}
const result = greet("John"); // This is useless and should be avoided
```
:::

## Void in Asynchronous Functions

In asynchronous functions, or functions that return a `Promise` without a value, `Promise<void>` is used instead of `void`.

```ts
function greet(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
        console.log(`Hello, ${name}!`);
        resolve();
    });
}

async function main() { // Inferred return type: Promise<void>
    await greet("John");
}
```