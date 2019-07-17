import { SeeMoreCard } from "@app/api/core/see-more-card";
import { DealCardModule } from "@app/api/core/deal-card";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class FeaturedDealsModule extends WordPressPostModule {
  public deals: [DealCardModule, DealCardModule, DealCardModule, DealCardModule];
  public seeMoreCard: SeeMoreCard;
  public title: string;
}
