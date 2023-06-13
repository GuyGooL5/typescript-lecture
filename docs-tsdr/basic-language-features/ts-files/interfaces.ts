interface PersonInterface {
  name: string;
  age: number;
  isEmployee: boolean;
}

const person1: PersonInterface = { name: "John", age: 42, isEmployee: true };

const person2: { name: string; age: number; isEmployee: boolean } = {
  name: "John",
  age: 42,
  isEmployee: true,
};

type PersonType = {
  name: string;
  age: number;
  isEmployee: boolean;
};

const person3: PersonType = { name: "John", age: 42, isEmployee: true };
