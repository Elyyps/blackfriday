import { SeeMoreCard } from "@app/api/core/see-more-card";
import { Deal } from "@app/api/core/deal/deal";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class FeaturedDealsModule extends WordPressPostModule {
  public deals: [Deal, Deal, Deal, Deal];
  public seeMoreCard: SeeMoreCard;
  public title: string;
}
