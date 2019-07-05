import { DealCardModule } from "@app/api/core/deal-card";
import { ShopCardModule } from "@app/api/core/shop-card";

interface IAction {
  type?: string;
}

export interface INavbarSearchCards extends IAction {
  deals: DealCardModule[];
  shops: ShopCardModule[];
}

export interface INavbarSearchText extends IAction {
  currentFilter: string
}

