---
slug: interfaces
title: Interfaces
description: Interfaces
---

# Interfaces and Objects
Interfaces in general represent objects with properties.  
Interfaces are always named and to declare an interface, we use the `interface` keyword:
```ts
interface Person {
    name: string;
    age: number;
    isEmployee: boolean;
} 
// 'Person' is an object with the properties 'name', 'age' and 'isEmployee'
```

Interfaces are types, and can be used to declare variables:
```ts
const person: Person = { name: "John", age: 42, isEmployee: true };
```

### Order (not) Matters
In interfaces, the order of the properties does not matter, in the next example, both interfaces are interchangeable and equivalent:
```ts
interface Person {
    name: string;
    age: number;
    isEmployee: boolean;
}

interface Human {
    isEmployee: boolean;
    name: string;
    age: number;
}
```
:::caution
In its philosophy, TypeScript is ignorant to the order of the properties in an object.  
In practice, and as of JavaScript ES2015+, the order of the properties in an object is preserved.  
This is something that shouldn't be relied on, because in the nature of objects, the order of the properties is not guaranteed nor important, because they are accessed by their name and not by their index.
:::

### Anonymous Objects
Object types can also be declared annonymously and directly in the variable declaration:
```ts
const person: {
    name: string;
    age: number;
    isEmployee: boolean;
} = { name: "John", age: 42, isEmployee: true };
```

### Named Anonymous Objects

Annonymous objects can be aliased using the `type` keyword just like we did with tuples:
```ts
type Person = {
  name: string;
  age: number;
  isEmployee: boolean;
};

const person: Person = { name: "John", age: 42, isEmployee: true };
```

### Merged Interfaces
Interfaces have a special property that allows us to redeclare them and merge their properties:
```ts

interface Point { x: number;}
interface Point { y: number;}
// Now 'Point' has both 'x' and 'y' properties

const point: Point = { x: 1, y: 2 };
```
:::caution Avoid Merging Interfaces
Merging interfaces is a powerful feature, but it can also be dangerous.  
It can lead to unexpected results and bugs, so use it with caution.
:::
:::note
Merging interfaces cannot be done with the `type` keyword.  
once a type is declared, it cannot be redeclared.
```ts
type Point = { x: number; };
type Point = { y: number; }; // Error: Duplicate identifier 'Point'
```
::: 


## Important Pitfalls

:::caution
Although the `interface` and `type` keywords are interchangeable in most cases, there are some differences between them.
We will not cover these differences in this course, but you can read more about them [here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces).
:::

:::danger
TypeScript only checks for the defined properties in an object's type.  
It will ignore the existence of any other properties.  
This behavior raises two important pitfalls:
1. Additional properties can leak into an object under the radar.
2. TypeScript won't let us access them even though they exist.

```ts
interface Person {
    name: string;
    age: number;
    isEmployee: boolean;
}
const person: Person = {
  name: "John",
  age: 42,
  isEmployee: true,
  email: "john@example.com",
}; // The 'email' property "leaked" into the object, but TypeScript didn't complain.

console.log(person.email); // email exists and the log will print it
// But TypeScript will complain that 'email' does not exist on type 'Person'
```

This is something to always keep in mind when working with objects in TypeScript.  
Here's a use-case where this is extremely dangerous:
```ts

interface User {
    firstName: string;
    lastName: string;
    email: string;
}

const user: User = getUserFromDb("user-id-1");

console.log(user); // we expect to see 'firstName', 'lastName' and 'email' properties
```
Output:
```json
{ firstName: "John", lastName: "Doe", email: "john@example.com", password: "secret" }
```
Notice that the `password` property leaked into the object, and we didn't even know it existed.
:::