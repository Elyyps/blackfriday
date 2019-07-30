import { FilterItem } from "@app/api/core/filter/filter-item";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ShopCard } from "@app/api/core/shop-card/shop-card";

export class StoreOverviewModule extends WordPressPostModule {
  public brandFilterItems: FilterItem[];
  public categoryFilterItems: FilterItem[];
  public sortBy: string;
  public statusFilterItems: FilterItem[];

  public shopCards: ShopCard[];
}
