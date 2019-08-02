import { FilterItem } from "@app/api/core/filter/filter-item";
import { IStoreResult } from "@app/api/core/store/endpoint";

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
  storesResult: IStoreResult;
}
