---
slug: /
sidebar_position: 1
---

# TypeScript; Didn't Read - TS;DR

## Audience

This book is for the impatient developer who wants to learn TypeScript as fast as possible, it will be heavily example based and will not cover every aspect or reasonings in depth.

Let's start!

## What's TypeScript?

TypeScript is a programming language and a [superset](https://en.wikipedia.org/wiki/Subset#:~:text=superset) of JavaScript that adds typing and other features to the language.  

TypeScript can do everything JavaScript can (and more), but not the other way around.

Here's a reference for a valid TypeScript and JavaScript code:
```ts
function add(a, b) {
    return a + b;
}
```
But this code is only valid TypeScript code:
```ts
function add(a: number, b: number) {
    return a + b;
}
```

### How Can I Run TypeScript Code?
The Browser and [Node.js](https://nodejs.org/en) can't run TypeScript code directly, therefore, TypeScript code must be compiled to JavaScript to be executed.

There are actually a few runtimes that can run TypeScript code directly like [ts-node](https://www.npmjs.com/package/ts-node), [Deno](https://deno.com/runtime), and [Bun](https://bun.sh/)



## Core Concepts

### Not a New Language
TypeScript adds a solid type system to JavaScript, but it's not a new language.  
Once the code is compiled to JavaScript, all types are stripped and the code is executed as regular JavaScript code.

In other words, the type system is "just for looks" and is not enforced at runtime.

In the following example, the type system will complain about the types, but the compiled JavaScript code will still work as expected:
```ts
function add(a: number, b: number) {
    return a + b;
}
add("Hello", "World"); 
// Theoretically, this should not work because the arguments are not numbers.
// But JavaScript doesn't care about types, so it will work.
```
Because once compiled, the code will look like this:
```js
function add(a, b) {
    return a + b;
}
add("Hello", "World");
```

### TypeScript is a Structural Type System

Being a [Structural Type System](https://en.wikipedia.org/wiki/Structural_type_system) means that TypeScript cares about the structure of the types, not their names, like in a [Nominal Type System](https://en.wikipedia.org/wiki/Nominal_type_system).

For example, in C language, the following two types are not compatible even though they have the same structure:
```c
struct Person {
    char* name;
};
struct Employee {
    char* name;
};
```

But in TypeScript, they are compatible, and interchangeable:
```ts

interface Person {
    name: string;
}

interface Employee {
    name: string;
}
```

### Does it Even Matter?
Yes, this allows us to use types from external libraries or within our codebase without having to (re)declare them ourselves or even import them in most cases.

In the following example, the `printPoint` function's only parameter is a `Point` type, but when we call it with an object that has the same structure as a `Point`, it will work, without having to import or declare the `Point` type.
```ts
/* point.ts */

interface Point{
    x: number;
    y: number;
}

export function printPoint(point: Point) {
    console.log(`x: ${point.x}, y: ${point.y}`)
}
```
```ts
/* main.ts */

import { printPoint } from "./point";

const p1 = { x: 1, y: 2 };

printPoint(p1); // This will work, even though p1 is not explicitly declared as a Point.

```

## What's Next?

In the following chapter we will dive into the basic language features of TypeScript.