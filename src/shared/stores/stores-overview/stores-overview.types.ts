import { ShopCard } from "@app/api/core/shop-card";

interface IAction {
  type?: string;
}

export interface IShopsOverview extends IAction {
  shopCards: ShopCard[];
}
