import { IScreenSize } from ".";

interface IAction {
  type?: string;
}

export interface IMobileSetting extends IAction {
  screenSize: IScreenSize;
}
export interface IBlackFridayDate extends IAction {
  day: number;
  month: number;
  year: number;
}
