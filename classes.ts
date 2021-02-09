class Vehicle {
  // sort of like the Ruby initalize
  constructor(public color: string) {}

  // protected: child class instances can access this
  // unavailable to call directly
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color); // orange

// Kyle Simpson would hate this so much
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // as it inherits from Vehicle
  }

  // private: unable to call directly from outside
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive(); // accessible as it is private; just like Ruby yall
    this.honk(); // accessible due to it being protected under Vehicle
  }
}

const car = new Car(4, "red");
