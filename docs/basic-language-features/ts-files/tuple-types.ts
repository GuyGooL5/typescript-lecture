const myTuple: [number, string, boolean] = [42, "Hello, world!", true];

const namedTuple: [id: number, name: string, isEmployee: boolean] = [
  42,
  "John",
  true,
];

const invalidTupleType: [number, string, boolean] = [42, "John", "true"];
// Type '"true"' is not assignable to type 'boolean'.

const invalidTupleLength: [number, string, boolean] = [42, "John"];
// Type '[number, string]' is missing the following properties from type '[number, string, boolean]': 2, 2
