import { ShopCard } from "@app/api/core/shop-card";
import { FilterBar } from "@app/api/core/filter-bar";

interface IAction {
  type?: string;
}

export interface IShopsOverview extends IAction {
  filterBar: FilterBar;
  shopCards: ShopCard[];
}
export interface IShopsCards extends IAction {
  shopCards: ShopCard[];
}
