const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// no array is being created...
// but an idea of a tuple
type Drink = [string, boolean, number];

// my first tuple
// const pepsi: [string, boolean, number] = ["brown", true, 40];
const pepsi: Drink = ["brown", true, 40];
// now: const pepsi: [string, boolean, number]
// inferred: const pepsi: (string | number | boolean)[]
// order won't matter with this inference which is bad

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// won't use Tuples very often...
// so why do this??

// ohhh good with CSV files!!!

// why you won't use tuples too often

const carSpecs: [number, number] = [499, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
