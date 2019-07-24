import { IScreenSize } from ".";

interface IAction {
  type?: string;
}

export interface IMobileSetting extends IAction {
  screenSize: IScreenSize;
}
