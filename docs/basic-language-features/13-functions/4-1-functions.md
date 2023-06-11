---
slug: functions-1
sidebar_label: The Rule of Thumb
description: Typing Funcitons - The Rule of Thumb
---

# Functions - The Rule of Thumb

In this section we will learn how to type the basic types of functions.
- Named functions (function declarations)
- Anonymous functions (function expressions)
- Arrow functions 

## The Thumb Rule 👍
The thumb rule for typing functions across all types and variations is pretty simple.  
There are two parts to it:
1. The type of the parameters.
2. The return type.


## Typing The Basic Functions

### Named Functions (Function Declarations)
Named functions can be typed by adding the type of the parameters and the return type after the function name, separated by a colon (`:`).

In the following example, we have a function called `add` that takes two parameters `a` and `b` of type `number` and returns a value of type `number`.

```ts
function add(a: number, b: number): number {
    return a + b;
}

add(1, 2); // returns 'number'
add("1", "2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Anonymous Functions (Function Expressions)

Anonymous functions are functions that are assigned to a variable.
They are typed just as named functions.

```ts
const add = function(a: number, b: number): number {
    return a + b;
}
```

### Arrow Functions

Arrow functions are typed similarly to the other types of functions, with the exception that the return type is typed after the parameters, separated by an arrow (`=>`).

```ts
const add = (a: number, b: number): number => a + b;

add(1, 2); // returns 'number'
add("1", "2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```


## Inferring The Return Type

In the above examples, we have explicitly typed the return type of the functions.
However, in most cases, the return type can be inferred by TypeScript.

Looking at the following example, TypeScript can infer that the return type of the function is `number` because the function returns an addition of two numbers.
```ts
function add(a: number, b: number) /* : number */ {
    return a + b;
}
```

However, if the function does not return anything, TypeScript will infer the return type as `void`.
```ts
function add(a: number, b: number) /* : void */ {
    console.log(a + b);
}
```

:::danger
There are some cases where TypeScript's inference is not as we would expect it to be.

For example look at the next function that returns a tuple of a `string` and a `number`.
```ts
function add(name: string, age: number) /* : (string | number)[] */ {
    return [a, b];
}
```
Well actually, TypeScript will infer the return type as `(string | number)[]` instead of `[string, number]`, because to the best of its knowledge, the function can return an array of strings and numbers.

To fix this, we must explicitly type the return type of the function.
```ts
function add(name:string, age: number): [string, number] {
    return [name, age];
}
```
:::
:::note Spoiler

Later in the course, we will learn how to override TypeScript's type system and force it to infer the return type as `[string, number]` instead of `(string | number)[]` using the `as const` assertion, or the `as` type assertion.
```ts
function add(name: string, age: number) /* : readonly [string, number] */ {
    return [name, age] as const;
}
// or 
function add(name: string, age: number) /* : [string, number] */ {
    return [name, age] as [string, number];
}
```
:::