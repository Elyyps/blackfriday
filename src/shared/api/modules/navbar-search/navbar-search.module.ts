import { DealCardModule } from "@app/api/core/deal-card";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ShopCard } from "@app/api/core/shop-card/shop-card";

export class NavbarSearchModule extends WordPressPostModule {
  public deals: DealCardModule[];
  public shops: ShopCard[];
}
