export type RobotType = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  battery: number;
  type: RobotType;
  reset: () => void;
  work: () => void;
}
class Robot implements IRobot {
  battery;
  name;
  decreaserID: NodeJS.Timer;

  constructor(public type: RobotType) {
    this.battery = 100;
    this.name = this.randomName();
    this.decreseaBattery();
  }

  reset() {
    this.name = this.randomName();
    this.battery = 100;
  }

  work() {
    if (this.battery > 0) {
      let message: string;

      switch (this.type) {
        case "Cleaner":
          message = "Larala larita, I clean my little house";
          break;
        case "Waiter":
          message = "Do you feel like a mini of fuet?";
          break;
        case "Developer":
          message =
            "JavaScript is cool - I develop with JavaScript -> I'm cool";
          break;

        default:
          message = "";
          break;
      }
      console.log(message);
    }
  }

  randomName(): string {
    let name: string = "";

    const letters: string = "ABCDEFGHIJKLMNPQRSTUVWXYZ";

    for (let index = 0; index < 4; index++) {
      if (index < 3) {
        name += letters.charAt(Math.floor(Math.random() * letters.length));
        continue;
      }
      name += Math.floor(Math.random() * (99 - 10) + 10);
    }
    return name;
  }

  decreseaBattery(): void {
    this.decreaserID = setInterval(() => {
      this.battery -= 1;
      console.log(this.battery);
      if (this.battery === 10) {
        console.log("I'm running low on battery");
      }
      if (this.battery === 0) {
        console.log("I'm out of battery");
        clearInterval(this.decreaserID);
      }
    }, 1000);
  }
}

export default Robot;
