import { ShopCard } from "@app/api/core/shop-card/shop-card";
import { SeeMoreCard } from "@app/api/core/see-more-card";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ShopCardModule } from "@app/api/core/shop-card";

export class FeaturedStoresModule extends WordPressPostModule {
  public seeMoreCard: SeeMoreCard;
  public shops: ShopCardModule[];
  public title: string;
}
