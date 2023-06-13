### Typing `this` in Named Functions
A very niche and less known feature of TypeScript is the ability to type `this` in functions.
`this` is a special variable that is available in every ***function declaration***, and it refers to the object that the function is called on.

Let's look at the following example:
```ts

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hi , my name is ${this.name}`;
};
```
In the example above, if we were to check the type of `this` in the `greet` function, we would see that it is of type `any` (more on `any` later).  
We can actually do better than that, we can type `this` to be of type `Person`:

```ts
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function (this: Person) {
  return `Hi , my name is ${this.name}`;
};
```
Now if we were to check the type of `this` in the `greet` function, we would see that it is of type `Person` and the `name` property is available and typed as well.

**Important Notess about typing `this`**
- Typing `this` is not available in arrow functions.  
- `this` must be the first parameter in the function declaration.
- When we type `this` as the first parameter, it is completely ignored when calling the function.  
  That means that the following two calls are equivalent:
  ```ts
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function (this: Person) {
        return `Hi , my name is ${this.name}`;
    };
    
    const person = new Person("John");
    person.greet();
    person.greet.call(person);
    ```
- Typing `this` is not enforced by the compiler, it is only there to help us.
  