import { WordPressPostModule } from "../wordpress-module/wordpress-module";

import { IArrowPanelProps } from "@app/core";

export class FeaturedCategoriesModule extends WordPressPostModule {
  public categoryItems: IArrowPanelProps[];
}
