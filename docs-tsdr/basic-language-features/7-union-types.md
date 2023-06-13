---
slug: unions
title: Union Types
description: Union Types
---

# Union Types
Union types can be one of multiple types.  
They are declared using the `|` symbol between the types.

In the following example, we want to create a type that represents a truthy value.  
For that we need to allow the type to be either a `boolean`, `number`, or `null`:
```ts
type Truthy = boolean | number | null;

let isTruthy: Truthy = 42;
isTruthy = 0;
isTruthy = true;
isTruthy = null;

if (isTruthy) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}
```
Union types can also be used in arrays and objects:
```ts
type Score = string | number;
const scores : Score[] = [100, 95, "A+", "C", 65]
```
They can also be used annonymously:
```ts
const scores2: (string | number)[] = [100, 95, "A+", "C", 65];
```

Union Types in Interfaces
```ts
interface Person {
    name: string;
    age: number | undefined;
    isEmployee: boolean;
}
```
