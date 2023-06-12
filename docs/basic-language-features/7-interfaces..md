---
slug: interfaces
title: Interfaces
description: Interfaces
---

# Interfaces
Interfaces are types of objects. They are declared using the `interface` keyword.  
Interfaces represent the shape of an arbirtary object. This object can be anything, as long as it has the properties defined in the interface.

### The `interface` keyword
```ts
interface Person {
    name: string;
    age: number;
    isEmployee: boolean;
}
```
In the example above `Person` is a type that represents an object with the properties `name`, `age` and `isEmployee`.  

It can be used as a type to declare objects that have these properties:
```ts
const person: Person = { name: "John", age: 42, isEmployee: true };
```

### Anonymous Objects

Since the nature of TypeScript is a structural type system, the object doesn't have to be explicitly declared as a named `interface`, we can define annonymous objects as well:
```ts
const person: {
    name: string;
    age: number;
    isEmployee: boolean;
} = { name: "John", age: 42, isEmployee: true };
```


### Named Anonymous Objects

With the knowledge from the previous section, we can alias the anonymous object type using a `type` alias:
```ts
type Person = {
  name: string;
  age: number;
  isEmployee: boolean;
};

const person: Person = { name: "John", age: 42, isEmployee: true };
```

### Merged Interfaces
Interfaces have a special property that allows us to merge them.  
We can declare an interface with the same name multiple times, and the properties will be merged together.

```ts
interface Point { x: number;}
interface Point { y: number;}

const point: Point = { x: 1, y: 2 };
```
---
:::caution
Although the `interface` and `type` keywords are interchangeable in most cases, there are some differences between them.
We will not cover these differences in this course, but you can read more about them [here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces).
:::