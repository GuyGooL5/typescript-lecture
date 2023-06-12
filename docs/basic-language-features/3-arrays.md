---
slug: arrays
sidebar_label: Arrays
description: Array Types
---

# Arrays
Array types are types that represent an array of values. They are declared using the `[]` symbol after the type name, or using the `Array` generic type (more on generics later)
```ts
const numbersArray: number[] = [1, 2, 3];
const numbersArray2: Array<number> = [1, 2, 3];
const namesList: string[] = ["John", "Jane", "Jack"];
const booleanArray: boolean[] = [true, false, true];

const invalidArrayItem: number[] = [1, 2, "three"];
// Error: Type 'string' is not assignable to type 'number'.

const invalidArray: number[] = 1;
// Error: Type '1' is not assignable to type 'number[]'.
```
