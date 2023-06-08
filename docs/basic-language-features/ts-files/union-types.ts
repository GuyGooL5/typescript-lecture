type Truthy = boolean | number | null;

let isTruthy: Truthy = 42;
isTruthy = 0;
isTruthy = true;
isTruthy = null;

if (isTruthy) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

type Score = string | number;

const scores: Score[] = [100, 95, "A+", "C", 65];

const scores2: (string | number)[] = [100, 95, "A+", "C", 65];

interface Person {
  name: string;
  age: number | undefined;
  isEmployee: boolean;
}
