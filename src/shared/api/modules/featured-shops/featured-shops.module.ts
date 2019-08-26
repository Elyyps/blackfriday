import { SeeMoreCard } from "@app/api/core/see-more-card";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { Store } from "@app/api/core/store/store";

export class FeaturedStoresModule extends WordPressPostModule {
  public seeMoreCard: SeeMoreCard;
  public stores: Store[];
  public title: string;
}
