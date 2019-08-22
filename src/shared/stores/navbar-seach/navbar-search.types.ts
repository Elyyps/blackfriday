import { Deal } from "@app/api/core/deal/deal";
import { Store } from "@app/api/core/store/store";

interface IAction {
  type?: string;
}

export interface INavbarSearchCards extends IAction {
  deals: Deal[];
  stores: Store[];
}

export interface INavbarSearchText extends IAction {
  currentFilter: string;
}
