import * as React from "react";
import { FeaturedShopsComponent } from "@app/modules/featured-shops/featured-shops.component";
import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { FeaturedStoresModule } from "@app/api/modules/featured-shops/featured-shops.module";

export const getComponent = (wordPressModule: WordPressPostModule) => {
  switch (wordPressModule.name) {
    case "FeaturedShopsModule":
      return <FeaturedShopsComponent {...wordPressModule as FeaturedStoresModule} />;
    default:
  }
};
