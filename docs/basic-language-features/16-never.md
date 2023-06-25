---
slug: never
title: The 'never' Type
description: The 'never' Type
---

# The `never` Type

`never` is a special type that represents a value that will never occur.  
What does that even mean?  

Well, let's take a look at the following examples:

```ts

function crash(){
    throw new Error("Something went wrong!");
}

function stuck(){
    while(true);
}
```

The `crash` function will never return a value because it throws an error, and the `stuck` function will never return a value because it's stuck in an infinite loop.

In both cases, the return type of the function is `never`.

```ts

function crash(): never {
    throw new Error("Something went wrong!");
}

function stuck(): never {
    while(true);
}
```

The `never` type is useful when you want to make sure that a function never returns a value.

For example, everything that happens after the `crash` function call is unreachable code, so the compiler will complain:

```ts

function crash(): never {
    throw new Error("Something went wrong!");
}

function doSomething() {
    crash();
    console.log("This will never happen");
}

doSomething();
```

The IDE itself would grey out the unreachable code and complain:

![Unreachable code](/assets/16-fig_1.png)