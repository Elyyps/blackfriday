import { MiddleFooter } from "./models/middle-footer";
import { BottomFooter } from "./models/bottom-footer";
import { TopFooter } from "./models/top-footer";

import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ISearchItem } from "@app/api/core/search-item";

export class Footer extends WordPressPostModule {
  public bottomFooter: BottomFooter;
  public middleFooter: MiddleFooter;
  public newsletterItems: ISearchItem[];
  public topFooter: TopFooter;
}
