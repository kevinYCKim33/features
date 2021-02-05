// add() should return number
// : number is optional but we'll always put them in
const add = (a: number, b: number): number => {
  return a + b;
};

// TS will think that subtract returns void if we don't do return a - b;
const subtract = (a: number, b: number): number => {
  return a - b;
};
