export interface RobotStructure {
  _id: number;
  name: string;
  image: string;
  speed: number;
  endurance: number;
  creationDate: string;
}

export type RobotsStructure = RobotStructure[];
export interface APIdata {
  robots: RobotsStructure;
}
