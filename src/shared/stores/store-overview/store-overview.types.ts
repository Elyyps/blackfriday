import { FilterItem } from "@app/api/core/filter/filter-item";
import { Store } from "@app/api/core/store/store";

interface IAction {
  type?: string;
}

export interface IFilterItems extends IAction {
  filterItems: FilterItem[];
}

export interface ISortBy extends IAction {
  sortBy: string;
}

export interface IStores extends IAction {
  stores: Store[];
}
