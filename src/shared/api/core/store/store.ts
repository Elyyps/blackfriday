export class Store {
  public id: string;
  public status: StoreStatus;
  public categories: string[];
  public availableBrands: string[];
  public name: string;
  public moreInfoLink: string;
  public description: string;
  public logo: string;
  public timeLeftPercentage: number;
  public startsInDays?: number;
}

export enum StoreStatus {
  AlmostOver,
  NowValid,
  StartsSoon,
  Expired,
  Unknown
}
