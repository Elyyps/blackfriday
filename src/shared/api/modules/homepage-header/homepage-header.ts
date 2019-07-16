import { ArrowPanel } from "@app/api/core/arrow-panel";
import { Slide } from "@app/api/core/slide";

export class HomepageHeader {
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
