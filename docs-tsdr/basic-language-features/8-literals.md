---
slug: literals
title: Literal Types
description: Literal Types
---

# Literals
Literals are types that represent a single value.  
They can be strings, numbers, booleans, or even [constant objects](#TODO).


Here's an example of a finite possible numeric values of a page's breakpoints:
```ts
type Breakpoint = 360 | 768 | 1024 | 1440 | 1920;

let breakpoint: Breakpoint = 360;

breakpoint = 768; // OK
breakpoint = 1000; // Error: Type '1000' is not assignable to type 'Breakpoint'.
```

Literal Types can also be strings

```ts
type Color = "red" | "green" | "blue";

let color: Color = "red";

color = "green"; // OK

color = "yellow"; // Error: Type '"yellow"' is not assignable to type 'Color'.
```

Literal types of different types can be mixed together (string literals with number literals)
```ts

type Breakpoint = 360 | 768 | 1024 | 1440 | 1920 | "mobile" | "tablet" | "desktop";

let breakpoint: Breakpoint = 360;

breakpoint = 768; // OK
breakpoint = "mobile"; // OK
```

Literal Types can also be mixed with non-literal types (see caveats below*)
```ts
type Size = "large" | "medium" | "small" | number;

let size: Size = "large";

size = "medium"; // OK
size = 42; // OK
size = 100000; // OK
size = "extra-large"; // Error: Type '"extra large"' is not assignable to type 'Size'.
```

:::caution
## Caveats of literal types
Literal types are [subtypes](https://en.wikipedia.org/wiki/Subtyping) of their general types.  

For example `42` is a subtype of `number` and `"large"` is a subtype of `string`.  
In other words `number` already includes `42`, but it also includes `420`, `1337`, `3.14` and infinitely more numbers.


This means that a union a literal type with its supertype is redundant since the supertype includes infinitely possible values.  
In the example below, the literal types don't matter since the `string` part of the union already includes them and all other strings.
```ts

type Size = "large" | "medium" | "small" | string;

let size: Size = "large";

size = "medium"; // OK
size = "extra-large"; // OK
size = "Extra Cheese Double Burger🍔"; // also OK? 
```
:::