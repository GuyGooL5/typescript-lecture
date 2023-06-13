interface Person {
  readonly name: string;
  age: number;
  isEmployee: boolean;
}

const person: Person = {
  name: "John",
  age: 42,
  isEmployee: true,
};

person.age = 43;
person.isEmployee = false;

person.name = "Jane";
// Cannot assign to 'name' because it is a read-only property