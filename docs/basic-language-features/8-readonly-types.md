---
slug: readonly
title: Readonly Properties
description: Readonly Properties
---

# Readonly properties
We can declare properties of an interface to be `readonly`.  
This means that the property can only be read, but not written to.
```ts
interface Person {
    readonly name: string;
    age: number;
    isEmployee: boolean;
}

const person: Person = {
    name: "John",
    age: 42,
    isEmployee: true
};

person.age = 43; // OK
person.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
```