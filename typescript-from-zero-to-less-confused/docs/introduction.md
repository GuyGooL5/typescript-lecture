---
slug: introduction
sidebar_position: 1
---

# Introduction

## What TypeScript is

TypeScript is a superset of JavaScript that adds optional static typing and other features to the language.  
It is designed to make large-scale JavaScript applications more manageable and easier to maintain.

### What Does "Superset of JavaScript" Mean?
Well it means that TypeScript is a language that is built on top of JavaScript. It has all the features of JavaScript and more.  
Note that this is not the case the other way around.

For example, this is a valid JavaScript and TypeScript code:
```ts
function add(a, b) {
    return a + b;
}
```
But this is not valid JavaScript code:
```ts
function add(a: number, b: number) {
    return a + b;
}
```

## Where Can I use TypeScript?
TypeScript can be used in any environment where JavaScript is used, including web development, server-side development, and desktop and mobile applications.

### How Can I Run TypeScript Code?
TypeScript code needs to be compiled to JavaScript before it can be run. This can be done using the TypeScript compiler `tsc`, which is a command-line tool that can be installed using npm. 

#### But Wait! I heared there's a way to run TypeScript code without compiling it!
That's true, although the most popular runtimes for JavaScript are still Node.js and the browser. There are several runtimes for TypeScript.
1. TSNode - which is a Node.js runtime that compile TypeScript code on the fly.
2. Deno - the successor of Node.js, which runs TypeScript code natively.
3. Bun - another runtime just like Deno in early stages of development that runs TypeScript code natively.

## What TypeScript is Not

### TypeScript is Not a New Language
TypeScript is simply a tool that helps you write better JavaScript code.  
It is not a new language, and it is not a replacement for JavaScript.  
Because TypeScript just compiles to JavaScript, some "invalid" TypeScript code is actually valid JavaScript code.

For example, this is invalid TypeScript code:
```ts
function add(a: number, b: number) {
    return a + b;
}
add("Hello", "World");
```
But it will compile to valid JavaScript code:
```js
function add(a, b) {
    return a + b;
}
add("Hello", "World");
```

## TypeScript is a Structural Type System

### What is a Structural Type System?
A structural type system is a type system based on the structure of a value.  
Structural typing is a way of relating types based solely on their members.  
This is in contrast to nominal typing. In a nominally typed language, types are compatible based on their declarations.

For example, in a nominal type system, the following two types are not compatible:
```ts
class Person {
    name: string;
}

class Employee {
    name: string;
}
```

But in TypeScript, they are compatible:
```ts

interface Person {
    name: string;
}

interface Employee {
    name: string;
}
```

### Does it Even Matter?

This is important because it allows us to use types that were not declared in our code. For example, we can use types from external libraries without having to declare them ourselves.

Let's say a function takes a parameter of type `Person`:
```ts

interface Person { name: string; }

function sayHello(person: Person) {
    console.log(`Hello ${person.name}`);
}
```
We can pass any arbitrary object to this function as long as it has a `name` property:
```ts

interface Person { name: string; }

function sayHello(person: Person) {
    console.log(`Hello ${person.name}`);
}

sayHello({ name: "John" });
```

This concept is referred to as "Duck Typing", which means that if it looks like a duck and quacks like a duck, it must be a duck.
The TypeScript engine is ignorant of the fact that the object we passed to the function was not declared as a `Person`, it only cares about the structure of the object.
