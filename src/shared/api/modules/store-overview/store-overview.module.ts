import { FilterItem } from "@app/api/core/filter/filter-item";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { Store } from "@app/api/core/store/store";

export class StoreOverviewModule extends WordPressPostModule {
  public brandFilterItems: FilterItem[];
  public categoryFilterItems: FilterItem[];
  public sortBy: string;
  public statusFilterItems: FilterItem[];

  public stores: Store[];
  public totalAmountOfStores: number;
}
