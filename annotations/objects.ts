const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// const {age} : number = profile // incorrect syntax
// TS Destructuring is cwazyy!
const { age, name }: { age: number; name: string } = profile;
// name underlined is fine

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
