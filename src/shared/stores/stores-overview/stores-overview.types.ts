import { ShopCard } from "@app/api/core/shop-card/shop-card";
import { FilterBar } from "@app/api/core/filter-bar/filter-bar";

interface IAction {
  type?: string;
}

export interface IShopsOverview extends IAction {
  filterBar: FilterBar;
  shopCards: ShopCard[];
  totalCards: number;
}
export interface IShopsCards extends IAction {
  shopCards: ShopCard[];
  totalCards: number;
}
