---
slug: optional
title: Optional Properties
description: Optional Properties
---

# Optional Properties
Optional properties are object properties that can be ommited. 
They are declared using the `?` operator after the property name.  

:::info
A property that is not optional is called a **_required_** property.  
:::

Note that once a property is declared as optional, it's automatically considered to be of type `T | undefined` (union with `undefined`), where `T` is the type of the property.

For example, the following interface declares the `age` property as optional, which means that it can be omitted, and now considered to be of type `number | undefined`:
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

:::caution

Optional properties are by nature in union with `undefined`, but properties whose type is `T | undefined` are **not** implicitly optional.  
The difference is that optional properties can be omitted, while properties of type `T | undefined` cannot be omitted and are considered **required**.

For example these two interfaces seem to be the same, but they are not:
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