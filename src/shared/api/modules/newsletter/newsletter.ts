import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ISearchItem } from "@app/api/core/search-item";

export class NewsletterModule extends WordPressPostModule {
  public items: ISearchItem[];
  public modalTitle: string;
  public text: string;
}
