---
slug: functions-2
sidebar_label: Rest, Optional, and Default Parameters
description: Typing Funcitons - Rest, Optional, and Default Parameters
---

# Functions - Rest, Optional, and Default Parameters

In the previous section we learned how to type functions, in this section we will learn about more advanced features of typed functions.

**Note**: from now on, each example will be shown only in a named function, assume that the same typing is applicable to all types of functions unless otherwise stated.

## Rest Parameters, Optional Parameters, and Default Parameters

### Rest Parameters

The [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) was introduced in ES2015, and it allows us to pass an arbitrary number of arguments to a function.

JavaScript Example:
```js
function add(a, b, ...numbers) {
    return numbers.reduce((i, j) => i + j, a + b);
}
```

We can type the rest parameter as an array of the type of the arguments we want to pass to the function.

```ts
function add(a:number, b:number, ...n: number[]): number {
    return n.reduce((i, j) => i + j, a + b);
}
```
:::caution
- Rest parameters must be the last parameters in the function.
- Rest parameters cannot be followed by required parameters.
:::

### Optional Parameters
Optional parameters are parameters that are not required to be passed to the function.

JavaScript Example:
```js
function add(a, b, c) {
    return a + b + (c ?? 0);
}

add(1, 2);
add(1, 2, 3);

```
In JavaScript, the parameter `c` can be carelessly omitted, and the function will still work.

In TypeScript, we can type the parameter `c` as optional by adding a `?` after the parameter name.

```ts
function add(a: number, b: number, c?: number): number {
    return a + b + (c ?? 0);
}

add(1, 2);
add(1, 2, 3);
add(1, 2, undefined);
```

Now the parameter `c` is optional, which means two things:
1. It can be omitted when calling the function.
2. It is of type `number | undefined` and must be validated before using it.

:::caution
- Optional parameters must be the last parameters in the function.
- Optional parameters cannot be followed by required parameters.
- Optional parameters act just like optional properties in interfaces.
- Declaring a parameter as optional is not the same as declaring it as `undefined`, the latter doesn't allow the parameter to be omitted.
:::

### Default Parameters

Default parameters are parameters that have a default value if they are not passed to the function.

JavaScript Recap:
```js

function add(a, b, c = 0) {
    return a + b + c;
}

add(1, 2);

```
In TypeScript this is pretty much the same, except we can type the parameter `c` as `number` to avoid the `number | undefined` type.
```ts
function add(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

add(1, 2);
add(1, 2, 3);
```

:::tip

The rules of type inference still apply to default parameters, so if you type the parameter `c` as `number`, you can omit the type annotation and TypeScript will infer the type of `c` as `number` just by looking at the type of the default value.

```ts
function add(a: number, b: number, c = 0) {
    return a + b + c; // 'c' is of type 'number'
}
```
:::
:::caution
- Default parameters must be the last parameters in the function.
- Default parameters cannot be followed by required parameters.
:::
## Composing Optional and Default Parameters

We can in fact compose optional and default parameters together, but we must follow the rules of optional and default parameters.

Here are a few examples of valid compositions:

```ts
function greet(prefix="Hello", name?: string) {
    return `${prefix} ${name ?? "World"}`;
}

function greet(prefix="Hello", name="World") {
    return `${prefix} ${name}`;
}
```
