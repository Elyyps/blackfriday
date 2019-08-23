import { FilterItem } from "@app/api/core/filter/filter-item";
import { IDealResult } from "@app/api/core/deal/endpoint";

interface IAction {
  type?: string;
}

export interface IFilterItems extends IAction {
  filterItems: FilterItem[];
}

export interface ISortBy extends IAction {
  sortBy: string;
}

export interface IDeals extends IAction {
  dealsResult: IDealResult;
}
