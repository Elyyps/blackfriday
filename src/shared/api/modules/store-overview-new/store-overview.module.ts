import { FilterItem } from "@app/api/core/filter/filter-item";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class StoreOverviewModule extends WordPressPostModule {
  public brandFilterItems: FilterItem[];
  public categoryFilterItems: FilterItem[];
  public sortBy: string;
  public statusFilterItems: FilterItem[];
}
