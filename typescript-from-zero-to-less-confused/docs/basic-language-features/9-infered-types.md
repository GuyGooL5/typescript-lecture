---
slug: inferred-types
title: Inferred Types
description: Inferred Types
---

# Inferred Types
Inferred types are automatically determined by TypeScript based on the value assigned to a variable.  

Up until now we have been explicitly declaring the type of our variables, but TypeScript can infer the type of a variable based on the type of the value assigned to it.

```ts
let myNumber = 42; // TypeScript infers the type of myNumber to be number
myNumber = "42"; // Error: Type 'string' is not assignable to type 'number'.
```