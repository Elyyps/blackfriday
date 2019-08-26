import { FilterItem } from "@app/api/core/filter/filter-item";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { Deal } from "@app/api/core/deal/deal";

export class DealOverviewModule extends WordPressPostModule {
  public brandFilterItems: FilterItem[];
  public categoryFilterItems: FilterItem[];
  public deals: Deal[];
  public emptyStateIcon: any;
  public sortBy: string;
  public storeFilterItems: FilterItem[];
  public totalAmountOfStores: number;
}
