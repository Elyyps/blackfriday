import { DealCardModule } from "@app/api/core/deal-card";
import { Store } from "@app/api/core/store/store";

interface IAction {
  type?: string;
}

export interface INavbarSearchCards extends IAction {
  deals: DealCardModule[];
  stores: Store[];
}

export interface INavbarSearchText extends IAction {
  currentFilter: string;
}
