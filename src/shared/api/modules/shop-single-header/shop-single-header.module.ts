import { Link } from "@app/api/core/link";
import { RatingModule } from "@app/api/core/rating";
import { TimeLeftBar } from "@app/api/core/time-left-bar";

export class ShopSingleHeaderModule {
  public backLink: Link;
  public checkList: string[];
  public CheckListTitle: string;
  public content: string;
  public couponCode: string;
  public discountButton: Link;
  public discountPicture: string;
  public discountSubtitle: string;
  public discountTitle: string;
  public favoriteButton: Link;
  public keywords: string[];
  public picture: string;
  public rating: RatingModule;
  public smallBackLink: Link;
  public storeLink: Link;
  public timeLeftBar: TimeLeftBar;
  public title: string;
}
