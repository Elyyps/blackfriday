import { ShopCard } from "@app/api/core/shop-card/shop-card";
import { SeeMoreCard } from "@app/api/core/see-more-card";

export class FeaturedStoresModule {
  public seeMoreCard: SeeMoreCard;
  public shops: [ShopCard, ShopCard, ShopCard, ShopCard];
  public title: string;
}
