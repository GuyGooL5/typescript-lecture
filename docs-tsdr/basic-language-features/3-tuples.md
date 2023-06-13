---
slug: tuples
title: Tuples
description: Tuple Types
---

# Tuples
Tuples represent a fixed-sized array of types.
They are declared using the `[]` symbol with the types of the items inside.

Here's a tuple of a number, string, and boolean:
```ts
const myTuple: [number, string, boolean] = [42, "Hello, world!", true];
```

Since sometimes it's hard to know what each member of the tuple represents, TypeScript 4.0 introduced named tuples:
```ts
const myTuple: [id: number, name: string, isEmployee: boolean] = [42, "John", true];
```
Now it's much easier to understand what each member of the tuple represents.
Note that the names of the members are only for documentation purposes and are not part of the type.


:::tip
You can also create an array of tuples for let's say mapping a list of 2D points:
```ts
const triangle: [x: number, y: number][] = [[0, 0], [0, 1], [1, 1]];
// or using the Array generic type
const rect: Array<[x: number, y: number]> = [[0, 0], [0, 1], [1, 1], [1, 0]];
```