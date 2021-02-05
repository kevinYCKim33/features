// add() should return number
// : number is optional but we'll always put them in
const add = (a: number, b: number): number => {
  return a + b;
};

// TS will think that subtract returns void if we don't do return a - b;
// ALWAYS ANNOTATE RETURN OF A FUNCTION!
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// never: we'll exit the function w/o returning anything
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// equivalent as above
// const logWeatherz = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// ES2015
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// };

logWeather(todaysWeather);
