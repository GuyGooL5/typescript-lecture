---
slug: never
title: The 'never' Type
description: The 'never' Type
---

# The `never` Type
## What is `never`?
`never` is a special type that represents a value that will never occur.  
Seems confusing, let's see.

Take a look at the following examples:

```ts
function crash(){
    throw new Error("Something went wrong!");
}
function stuck(){
    while(true);
}
```

- The `crash` function will never return a value because it always throws an error. 
- The `stuck` function will never return a value because it's an infinite loop.

In both cases, the return type of the function is `never`.

```ts
function crash(): never {
    throw new Error("Something went wrong!");
}
function stuck(): never {
    while(true);
}
```


## Why/When to use `never`?

We don't really "use" `never`, but rather "know it's there".  
I'll explain.

When we write code, we expect it to be executed.  
But when a function returns `never`, it means that everything after the function call is unreachable code.


In the following example, the `doSomething` function will never execute the `console.log` statement because the `crash` function will throw an error and the program will crash.
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
TypeScript's compiler is smart enough to detect unreachable code and will complain about it.  
Also, the IDE will warn you about unreachable code.

![Unreachable code](/assets/16-fig_1.png)

:::note 
`never` is also widely used in advanced TypeScript features where we want to represent "impossible types".   
More on that in the [Advanced Types](#todo) chapter.
:::