import { FilterItem } from "@app/api/core/filter/filter-item";
import { ShopCard } from "@app/api/core/shop-card/shop-card";

interface IAction {
  type?: string;
}

export interface IFilterItems extends IAction {
  filterItems: FilterItem[];
}

export interface ISortBy extends IAction {
  sortBy: string;
}

export interface IShopCards extends IAction {
  shopCards: ShopCard[];
}
