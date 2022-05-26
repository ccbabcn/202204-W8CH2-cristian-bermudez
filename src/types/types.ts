type RobotType = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  battery: number;
  type: RobotType;
  reset: () => void;
  work: () => void;
}
class Robot implements IRobot {
  battery;

  constructor(
    public name: string,
    public type: RobotType,
    private message: string
  ) {
    this.battery = 100;
  }

  reset() {}

  work() {
    console.log(this.message);
  }
}

export class Cleaner extends Robot {
  type: RobotType;
  constructor(public name: string) {
    super(name, "Cleaner", "Larala larita, I clean my little house");
  }
}

export class Waiter extends Robot {
  type: RobotType;
  constructor(public name: string) {
    super(name, "Waiter", "Do you feel like a mini of fuet?");
  }
}

export class Developer extends Robot {
  type: RobotType;
  constructor(public name: string) {
    super(
      name,
      "Developer",
      "JavaScript is cool - I develop with JavaScript -> I'm cool"
    );
  }
}
