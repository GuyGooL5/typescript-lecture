---
slug: functions-intro
sidebar_label: Functions - Introduction
description: Typing Funcitons - Introduction
---

# Functions - Introduction

In this section we will learn how to type functions.   



## Functions Recap

Functions in JavaScript come in many forms and variations.

### Named Functions (Function Declarations)
Named functions are functions that have been declared using the `function` followed by the name of the function.

```ts
function add(a, b) {
    return a + b;
}

add(1, 2);
```

### Anonymous Functions (Function Expressions)

Annymous functions are functions that might or might not have a name. They are usually assigned to a variable.

```ts
const add = function(a, b) {
    return a + b;
}

add(1, 2);
```

### Arrow Functions

Arrow functions are a shorthand for anonymous functions. They are usually used when the function body is a single expression.

```ts
const add = (a, b) => a + b;
```


## Up Next

In the next section we will learn about typing functions, creating a named type of function, typing `this` in functions, and more.