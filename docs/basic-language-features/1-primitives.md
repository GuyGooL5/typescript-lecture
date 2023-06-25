---
slug: primitives
sidebar_label: Primitives
description: Primitive Types
---

# Explicit Types, Primitives and Type Inferring

## Explicit Types
We can explicitly declare the type of a variable using the `:` operator.

```ts
let myNumber: number = 42;
let myString: string = "Hello, world!";
```
Once the type is declared, no other type can be assigned to the variable.
```ts
myNumber = "Hello, world!"; // Error: Type 'string' is not assignable to type 'number'
```


## Primitives
TypeScript has the following basic everyday primitive types:  
`boolean`, `number`, `string`, `null`, `undefined`, `bigint`, `symbol`

```ts
const myBoolean: boolean = true;
const myNumber: number = 42;
const myString: string = "Hello, world!";
const myNull: null = null;
const myUndefined: undefined = undefined;
const myBigInt: bigint = 9007199254740991n;
const mySymbol: symbol = Symbol("mySymbol");
```

## Type Inferring
TypeScript supports inferring, which means that the type of a variable can be determined by the value assigned to it.

```ts
let age = 42; // '42' is of type number, so age is now of type number
age = "Hello, world!"; // Error: Type 'string' is not assignable to type 'number'
```
```ts
let isConnected = true; // 'true' is of type boolean, so isConnected is now of type boolean
isConnected = "disconnected"; // Error: Type 'string' is not assignable to type 'boolean'
```
```ts
let name = "John"; // '"John"' is of type string, so name is now of type string
name = 42; // Error: Type 'number' is not assignable to type 'string'
```