---
slug: literals
title: Literal Types
description: Literal Types
---

# Literals
Literals are types that represent a single value.  
They can be strings, numbers, booleans, or even constant objects (more on this later).

Literal types seem redundant at first, but they are very useful when used in union with other types.

For example let's say we want to create a type that can be one of the next possible breakpoints of the page: 
- 360px
- 768px
- 1024px
- 1440px
- 1920px

```ts
type Breakpoint = 360 | 768 | 1024 | 1440 | 1920;

let breakpoint: Breakpoint = 360;

breakpoint = 768; // OK
breakpoint = 1000; // Error: Type '1000' is not assignable to type 'Breakpoint'.
```

We can also use literal types to create a type that can be one of a few possible colors.

```ts
type Color = "red" | "green" | "blue";

let color: Color = "red";

color = "green"; // OK

color = "yellow"; // Error: Type '"yellow"' is not assignable to type 'Color'.
```

Literal type unions can also be mixed
```ts

type Breakpoint = 360 | 768 | 1024 | 1440 | 1920 | "mobile" | "tablet" | "desktop";

let breakpoint: Breakpoint = 360;

breakpoint = 768; // OK
breakpoint = "mobile"; // OK
```

How about mixing literal types with non-literal types?  
We can do that too!

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
Literal types are indeed single value types, but they are also an extension of the type they represent.  We will discuss extensions later, but for now, let's see an example where literal types simply don't matter.

```ts

type Size = "large" | "medium" | "small" | string;

let size: Size = "large";

size = "medium"; // OK
size = "extra-large"; // OK
size = "Extra Cheese Double Burger🍔"; // also OK? 
```

In the example above, we have a type `Size` that can be either `"large"`, `"medium"`, `"small"` or any other `string`.  
But since `string` is a supertype(=includes all of the following) of `"large"`, `"medium"` and `"small"`, we can assign any string to a variable of type `Size` which renders the existence of the literal types useless.
:::