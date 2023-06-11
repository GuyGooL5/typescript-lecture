---
slug: named-types
title: Named Types
description: Named Types
---

# Named types
Sometimes we want to reuse a type in multiple places or simply give it an alias.  
To do that we can use the `type` keyword to declare a named type.

For example we can declare a type for a point in 2D space:
```ts
type Point = [x: number, y: number];
```
Now we can use the `Point` type in multiple places:
```ts
const point: Point = [1, 2];
const points: Point[] = [[1, 2], [3, 4], [5, 6]];
```
We can also declare a type to be an array of points:
```ts
type Points = Point[];
const points2: Points = [[1, 2], [3, 4], [5, 6]];
```
:::tip 
Don't overuse named types, they can make your code harder to read and understand. In the example above, we defined a `Point` type, to represent a point in 2D space and reuse it in multiple places.  

Defining a `Points` type can be confusing from a reader's perspective, because it's not clear whether it's an array of points or a single point. 
Using the `Point[]` syntax is more clear and concise.
:::