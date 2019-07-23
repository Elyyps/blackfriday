import { ArrowPanel } from "@app/api/core/arrow-panel/arrow-panel";
import { Slide } from "@app/api/core/slide";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class HomepageHeader extends WordPressPostModule {
  public arrowPanelslinks: ArrowPanel[];
  public description: string[];
  public durationBlackFriday: string;
  public durationBlackFridayText: string;
  public label: string;
  public popularProducts: ArrowPanel[];
  public popularProductsTitle: string;
  public popularStores: ArrowPanel[];
  public popularStoresTitle: string;
  public slides: Slide[];
  public startingDate: string;
  public startingDateText: string;
  public title: string;
}
