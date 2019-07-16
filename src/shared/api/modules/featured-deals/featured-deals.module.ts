import { SeeMoreCard } from "@app/api/core/see-more-card";
import { DealCardModule } from "@app/api/core/deal-card";

export class FeaturedDealsModule {
  public deals: [DealCardModule, DealCardModule, DealCardModule, DealCardModule];
  public seeMoreCard: SeeMoreCard;
  public title: string;
}
