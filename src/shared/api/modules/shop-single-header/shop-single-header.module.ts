import { Link } from "@app/api/core/link";
import { RatingModule } from "@app/api/core/rating";
import { TimeLeftBar } from "@app/api/core/time-left-bar";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { BodyTextModule } from "../body-text/body-text";
import { IShareSocialComponent } from "@app/api/core/share-social";

export class ShopSingleHeaderModule extends WordPressPostModule {
<<<<<<< HEAD
=======
  public backLink: Link;
  public bodyTextModule: BodyTextModule;
>>>>>>> develop
  public checkList: string[];
  public CheckListTitle: string;
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
  public shareSocial: IShareSocialComponent;
  public smallBackLink: Link;
  public storeLink: Link;
  public timeLeftBar: TimeLeftBar;
  public title: string;
}
