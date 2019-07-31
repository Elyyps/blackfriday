import { Link } from "@app/api/core/link";
import { RatingModule } from "@app/api/core/rating";
import { TimeLeftBar } from "@app/api/core/time-left-bar";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class ShopSingleHeaderModule extends WordPressPostModule {
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
  public links: Link[];
  public picture: string;
  public rating: RatingModule;
  public smallBackLink: Link;
  public storeLink: Link;
  public timeLeftBar: TimeLeftBar;
  public title: string;
}
