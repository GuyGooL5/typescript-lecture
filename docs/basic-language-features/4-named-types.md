---
slug: named-types
title: Named Types
description: Named Types
---

# Named Types
Types can be named (or aliased) using the `type` keyword for better readability and reusability just like variables by using the `type` keyword:

```ts
type Point = [x: number, y: number];

const point: Point = [1, 2];

const points: Point[] = [[1, 2], [3, 4], [5, 6]];
```

```ts
type Person = [name: string, age: number, isEmployee: boolean];

const person: Person = ["John", 42, true];
```

```ts
type People = Person[];
type Points = Point[];
const people: People = [["John", 42, true], ["Jane", 43, false]];
const points: Points = [[1, 2], [3, 4], [5, 6]];
```

:::caution
Don't overuse type aliases. Use them only when they improve readability and reusability.  
In the last example, we could have used `Person[]` and `Point[]` instead of `People` and `Points`.  
Having such nuanced type aliases can make the code harder to read and understand.  
Solely on looking at the type `Points`, it's hard to tell whether it's an array of points or a single point.
:::