import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { Filter } from "@app/api/core/filter/filter";

export class StoresOverviewModule extends WordPressPostModule {
  public filters: Filter[];
  public totalShops: number;
}
