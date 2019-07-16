import { ShopCard } from "@app/api/core/shop-card/shop-card";
import { SeeMoreCard } from "@app/api/core/see-more-card";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class FeaturedStoresModule extends WordPressPostModule {
  public seeMoreCard: SeeMoreCard;
  public shops: [ShopCard, ShopCard, ShopCard, ShopCard];
  public title: string;
}
