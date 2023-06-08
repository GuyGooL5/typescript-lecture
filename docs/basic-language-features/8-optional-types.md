---
slug: optional
title: Optional Properties
description: Optional Properties
---

# Optional Properties
Optional properties are properties that can be set to be `undefined` or completely omitted.  
They are declared using the `?` operator after the property name.  
A property that is not optional is called a **_required_** property.  
Note that optional properties automatically make the type of the property `undefined` as well.

```ts
interface Person {
    name: string;
    isEmployee: boolean;
    age?: number; // Optional
}

const person1: Person = { name: "John", isEmployee: true };
// This is OK because age is optional and can be omitted

const person2: Person = { name: "Jack", isEmployee: true, age: undefined };
// This is OK because age is optional and can be set to undefined

const person3: Person = { name: "Jane", isEmployee: true, age: 42 };
// This is OK because age is of type number and can be set to a number
```
:::danger

Optional properties act as if they were unions with `undefined`, but they are not the same because if a property is optional, it can be omitted completely, while a union with `undefined` cannot be omitted.

For example these two interfaces seem to be the same, but creating an object of type `PersonType1` without the `age` property will not result in an error, while creating an object of type `PersonType2` without the `age` property will result in an error.

```ts
interface PersonType1 {
    name: string;
    age?: number;
    isEmployee: boolean;
}

interface PersonType2 {
    name: string;
    age: number | undefined;
    isEmployee: boolean;
}

const person1: PersonType1 = { name: "John", isEmployee: true }; // OK

const person2: PersonType2 = { name: "John", isEmployee: true }; 
// Error: Property 'age' is missing in type '{ name: string; isEmployee: boolean; }'
// but required in type 'PersonType2'.
```
:::