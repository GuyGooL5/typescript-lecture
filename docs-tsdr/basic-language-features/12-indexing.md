---
slug: indexing
title: Indexing Types
description: Indexing Types
---

# Indexing Types
Indexing types is a way to access the properties of an object to get the type of the property.

For example let's say we have our beloved `Person` interface from the previous slides:

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}
```
We would like to know the type of the `name` property of the `Person` interface.  
Luckily for us, we can index the `Person` interface to get the type of the `name` property.

```ts
type NameType = Person["name"]; // string
let name: NameType = "John Doe"; // OK
```

This is extremely useful when we want to create a type that is derived from another type.  

## Indexing Nested Types
Indexing can also be nested to get the type of a property of a property.

```ts

interface Person {
  name: string;
  age: number;
  email: string;
  address: {
    fullAddress: string;
    geocode: { lat: number; lng: number; }
  }
}

type GeocodeType = Person["address"]["geocode"]; // { lat: number; lng: number; }

const geocode: GeocodeType = { lat: 0, lng: 0 }; // OK
```

### Indexing Arrays to Get Single Item Type

Let's assume we are faced with a situation where we don't have the type of a single item of an array, but rather the type of the array itself.  
For that we can use the `number` type to index the array type to get the type of a single item of the array.  
The way this works is that the `number` type indexes all the possible items of the array.

```ts
type People = { name: string; age: number; isEmployee: boolean; }[];
// People is an array of objects which represent a person


type Person = People[number];
// The 'number' indexes "all" the possible values of the array
// which conviniently is the type of a single item of the array

let person: Person = {
    name: "John Doe",
    age: 30,
    isEmployee: true
}; // OK
```
:::note A Thought Experiment
## What Happens When Indexing a Tuple with `number`?
We know that we can index arrays with `number` to get the type of a single item of the array.  
But what happens when we index a tuple with `number`?

For example let's say we have a tuple type that represents a person:

```ts
type Person = [name: string, age: number, isEmployee: boolean];
let person: Person = ["John Doe", 30, true];

```

What would be the type of a single item of the tuple, indexed with `number`?

```ts
type PersonItem = Person[number];

let personItem: PersonItem;

personItem = "John Doe"; // OK
personItem = 30; // OK
personItem = true; // OK
```
Wait WHAT? 

Since the `number` type indexes all the possible values of the array, it also indexes all the possible values of the tuple.  
In our case the tuple has 3 items, so the `number` type indexes the values `0, 1, 2`, and it returns a union of all the possible values of the tuple.  
In other words the type of `PersonItem` is `string | number | boolean`.
:::


:::note Another Thought Experiment
## What Happens When Indexing an Object with `string`?

We know that we can index object with string literals that are the keys of the object to get the type of the value of the property.
We also know that we can index arrays and tuples with `number` to get the type of a single item of the array or tuple.  
But what happens when we index an object with `string`?

```ts
interface Person { name: string; age: number; isEmployee: boolean; };

type PersonItem = Person[string];
// Error: Type 'Person' has no matching index signature for type 'string'
```

The answer is that we get an error. This is because the only valid type to index `Person` is the union `"name" | "age" | "isEmployee"`.  
We learned that `string` is a supertype of all string literals. That means that when we try to index `Person` with `string` we are actually indexing it with an infinite number of possible literals, yet we only have 3 possible literals.

But fear not, there is a way to index an object with all of its possible keys without having to write them all out.  
This is done by using the `keyof` operator which will be covered later.
:::