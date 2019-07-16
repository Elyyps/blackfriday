import { SeeMoreCard } from "@app/api/core/see-more-card";
import { DealCardModule } from "@app/api/core/deal-card";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ShopCard } from "@app/api/core/shop-card/shop-card";

export class NavbarSearchModuleInitial extends WordPressPostModule {
  public titleDeals: "Gevonden deals";
  public titleShops: "Gevonden winkels";
}

export class NavbarSearchModule extends WordPressPostModule {
  public deals: DealCardModule[];
  public shops: ShopCard[];
}
