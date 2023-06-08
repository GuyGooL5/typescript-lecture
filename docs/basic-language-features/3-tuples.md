---
slug: tuples
title: Tuples
description: Tuple Types
---

# Tuples
Tuple types represent a fixed-sized array of values and a fixed type for each element.  
They are declared using the `[]` symbol after the type name, with the type of each element separated by a comma.
```ts
const myTuple: [number, string, boolean] = [42, "Hello, world!", true];
```
Tuple types can also be named:
```ts
const myTuple: [id: number, name: string, isEmployee: boolean] = [42, "John", true];
```
Invalid tuple type assignments:
```ts
const invalidTupleType: [number, string, boolean] = [42, "John", "true"];
// Type 'string' is not assignable to type 'boolean'.

const invalidTupleLength: [number, string, boolean] = [42, "John"];
// Type '[number, string]' is missing the following properties from type '[number, string, boolean]': 2, 2
```
Note that the named tuples are there only for documentation purposes, the names have no effect on the type.

:::tip
### Array of Tuples Types? 🤔
We can declare arrays **of** tuples as well
```ts
const points: [x: number, y: number][] = [[1, 2], [3, 4], [5, 6]];
```
