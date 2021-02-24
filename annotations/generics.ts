class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(["a", "b", "c"]);
// const arr: ArrayOfAnything<string> TS Smart enough to know it's a <string> generic

// Example of generics with functinos

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Grider recommends you just write the generic out even though TS smart enough to infer for error catching
printAnything<string>(["a", "b", "c"]);

// Generic Constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }

  derp() {}
}

interface Printable {
  print(): void;
}

// generic constraints
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// Type 'number' is not assignable to type 'House'.
// esoteric way of saying 1.print() isn't possible
// printHousesOrCars<House>([1, 2, 3, 4]);
printHousesOrCars<Car>([new Car(), new Car()]);
