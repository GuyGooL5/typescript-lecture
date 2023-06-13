---
slug: template-literals
title: Template Literals
description: Template Literal Types
---

# Template Literals
Template Literals look and act like [string literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) that can contain placeholder types.
They are always a subtype of `string`, and can be declared using the dollar `${}` syntax inside a string literal.

Here are two examples of template literals, one for a file extension and one for a root file path:
```ts
type FileExtension = `.${string}`;
type RootPath = `/${string}`;

let fileExt: FileExtension = ".mp4";
fileExt = ".txt";
fileExt = "mp4"; // Error: Type '"mp4"' is not assignable to type 'FileExtension'.

let rootPath: RootPath = "/Users/username";
rootPath = "/var/www";
rootPath = "Users/username"; // Error: Type '"Users/username"' is not assignable to type 'RootPath'.
```

### Template Literal Types with [Union Types](unions) and [Literal Types](literals)?
Yeah, why not.

Here's a revised file extension type that can be only a media file extension:
```ts

type MediaFileExtension = ".mp4" | ".mov" | ".avi"; // Without template literals

type MediaFileExtension = `.${"mp4" | "mov" | "avi"}`; // With template literals
```

---

:::info
Template literals are like the regular expressions of types.
They can vary and be as complex as you want them to be.

Here are some more examples of template literals:
```ts

type BasicEmail = `${string}@${string}.${string}`;

let email: BasicEmail = "abc@example.com"; // OK

email = "abc@example"; 
// Error: Type '"abc@example"' is not assignable to type '`${string}@${string}.${string}`'.
```
```ts
type Ratio = `${number}:${number}`;

let ratio: Ratio = "16:9"; // OK

ratio = "4:3"; // OK
ratio = "3.14:1.618"; // OK

ratio = "16:9:1"; 
// Error: Type '"16:9:1"' is not assignable to type '`${number}:${number}`'.
ratio = "big:small"; 
// Error: Type '"big:small"' is not assignable to type '`${number}:${number}`'.
```

And here's an overkill example of a template literal type that represents a URL (it's seriously broken, please don't use it)

```ts
type Protocol = "http" | "https";
type Host = `${string}.${string}`;
type Port = `:${number}` | "";
type Path = `/${string}` | "";
type Query = `?${string}=${string}` | "";
type Fragment = `#${string}` | "";

type URL = `${Protocol}://${Host}${Port}${Path}${Query}${Fragment}`;
```