import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ISearchItem } from "@app/api/core/search-item";

export class CtaNewsletterModule extends WordPressPostModule {
  public buttonTitle?: string;
  public icon?: any;
  public modalTitle?: string;
  public newsletterItems: ISearchItem[];
  public text?: string;
}
