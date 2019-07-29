import { IArrowPanelProps } from "@app/core/arrow-panel";
import { Slide } from "@app/api/core/slide";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class HomepageHeader extends WordPressPostModule {
  public arrowPanelslinks: IArrowPanelProps[];
  public description: string[];
  public durationBlackFriday: string;
  public durationBlackFridayText: string;
  public label: string;
  public popularProducts: IArrowPanelProps[];
  public popularProductsTitle: string;
  public popularStores: IArrowPanelProps[];
  public popularStoresTitle: string;
  public slides: Slide[];
  public startingDate: string;
  public startingDateText: string;
  public title: string;
}
