const carMakers = ["ford", "toyota", "chevy"]; // TS inference smart enough
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]]; // const carsByMake: string[][]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(1); // TS will flag
// TS won't be smart enough or deliberately won't go back
// to carMakers and reinfer it as an any type

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
// const importantDates: (string | Date)[] everything in this array can either be strings or Dates
importantDates.push("2030-10-10");
importantDates.push(new Date());
importantDates.push(100);
