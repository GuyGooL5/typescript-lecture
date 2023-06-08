---
slug: primitives
sidebar_label: Primitives
description: Primitive Types
---

# Primitives

TypeScript has the following basic evereyday primitive types:  
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
Invalid primitive type assignments:
```ts
const invalidString: string = 42;
// Type 'number' is not assignable to type 'string'
```
