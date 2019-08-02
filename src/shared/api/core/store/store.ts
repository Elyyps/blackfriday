export class Store {
  public availableBrands: string[];
  public categories: string[];
  public description: string;
  public id: string;
  public logo: string;
  public moreInfoLink: string;
  public name: string;
  public startsInDays?: number;
  public status: StoreStatus;
  public timeLeftPercentage: number;
}

export enum StoreStatus {
  AlmostOver,
  NowValid,
  StartsSoon,
  Expired,
  Unknown
}
