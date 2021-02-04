// none of these variables needed to be annotated
// there's tension between type annotation and type inference

// we will rely on type inference almost always
// none of this explicit speed: string = 'fast' thing
let apples = 5; // apples will always be a number
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null; // supposedely this is difficult
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
// colors is an array with only strings inside of it

let myNumbers: number[] = [1, 2, 3];
// myNumbers is an array with only numbers inside of it

let truths: boolean[] = [true, true, false];
// truths is an array with only booleans inside of it.

// Classes
class Car {}

let car: Car = new Car();

// Object literal
// point will always be an object with keys x and y that are numbers
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
  //   q: 40, //errors out
};

// Function

// logNumber is a function that accepts i: a number, and will return nothing (void)
// everything to left of = is annotation
// everything to right of = is the implementation or actual function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x", "y": 20}';
