import Robot, { RobotType } from "./types/types";

const robotNamesList: string[] = [];

const createRobot = (type: RobotType): Robot => {
  const newRobot = new Robot(type);
  if (!robotNamesList.includes(newRobot.name)) {
    robotNamesList.push(newRobot.name);
    return newRobot;
  } else {
    createRobot(type);
  }
};

createRobot("Cleaner");
