---
slug: arrays
sidebar_label: Arrays
description: Array Types
---

# Arrays
[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) in TypeScript can be typed in two ways:
1. Using the `[]` symbol after the type name.
2. Using the `Array<T>` generic[<sup>[1]</sup>](#notes) type where `T` is the type of the array items.

```ts
const numbersArray: number[] = [1, 2, 3]; 
const numbersArray2: Array<number> = [1, 2, 3];
const namesList: string[] = ["John", "Jane", "Jack"];
const booleanArray: boolean[] = [true, false, true];
```

### Notes

[1] Generic types are covered in a [later section](#TODO).