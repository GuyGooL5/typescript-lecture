---
slug: any
title: The 'any' Type
description: The 'any' Type
---

# The `any` Type

`any` is a special type that represents literally any value. It is used when you don't know (and don't care) about the type of a value.  
It is the most flexible type in TypeScript, and it's also the most dangerous one.

```ts

let x: any = 10;
x = "hello"; // OK
x = {
    firstName: "John",
    lastName: "Doe"
}; // OK

x = true; // OK

x = [1, 2, 3]; // OK

x = (message) => console.log(message); // OK

```


:::caution Don't Use `any`!

The `any` type is basically saying to the compiler "I'm no longer willing to use TypeScript's type system".  
It's the same as using plain JavaScript.  
Here's an example of why you shouldn't use `any`:

```ts

function printAddress(user: any) {
    console.log(user.address.street);
    console.log(user.address.city);
    console.log(user.address.country);
}
```
At first glance, this function looks fine. But what if we pass a value that doesn't have an `address` property?

```ts
printAddress({ firstName: "John", lastName: "Doe" });
```

The compiler won't complain, but the program will crash at runtime with an error like this:

`Cannot read property 'street' of undefined`

Here's an even worse example:

```ts
printAddress("New York");
```

Without type checking, the unaware developer might pass a string.

:::

## When it's OK-ish to use `any`

**Avoid `any` at all cost!**  
Except for the following use-cases:

1. **When you're migrating from JavaScript to TypeScript**  
   You can use `any` to gradually migrate your codebase to TypeScript.  
   For example, you can start by using `any` for all your variables, and then gradually add type annotations to them.

2. **When you're working with third-party libraries**  
   Sometimes, you need to use a third-party library that doesn't have type definitions.  
   In this case, you can use `any` to tell the compiler "I know what I'm doing, leave me alone".

## When it's really OK to use `any`

The only plausible use-case for `any` is when we really-really don't care about the type of a value and can guarantee that it will be handled properly at runtime, regradless of its type.  

For example, if we implement a function that logs and serializes any value to JSON, we can use `any`:

```ts
import fs from "fs";

function serializeLog(value: any) {
    const serializedValue = JSON.stringify(value);
    fs.appendFileSync("log.txt", serializedValue);    
}

serializeLog("hello");
serializeLog(10);
serializeLog(true);
serializeLog({ firstName: "John", lastName: "Doe" });
```