interface IAction {
  type?: string;
}

export interface ILocation extends IAction {
  location: string;
}
