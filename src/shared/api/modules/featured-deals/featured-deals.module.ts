import { SeeMoreCard } from "@app/api/core/see-more-card";
import { DealCard } from "@app/api/core/deal-card";

export class FeaturedDealsModule {
  public deals: [DealCard, DealCard, DealCard, DealCard];
  public seeMoreCard: SeeMoreCard;
  public title: string;
}
