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
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); // {x: 10, y:20}
// Typescript has no idea what JSON.parse will return
// coordinates is an 'any' type
// Avoid variables with 'any' at all costs
// so let's willingly add type annotations here then

// 2) When we declare a variable on one line
// then initialize it later
let words = ["red", "green", "blue"];

let foundWord: boolean; // because it's not declared; foundWord could be anything
// if the word never gets found it's undefined
// if it is found, then it's a boolean
// that's why we explicitly state the foundWord
// let foundWord = false; // technically this is way better

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// corner case according to Grider
// 3) When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];

// numberAboveZero can be a boolean or a number; this is justified
// could see this happening in a lot of algorithm style questions
let numberAboveZero: boolean | number = false;

// if you find a positive number, return the number; otherwise return false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
