import * as React from "react";
import { FeaturedShopsComponent } from "@app/modules/featured-shops/featured-shops.component";
import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { FeaturedStoresModule } from "@app/api/modules/featured-shops/featured-shops.module";
import { NavBarComponent } from "@app/modules/nav-bar";
import { NavbarSearchModule } from "@app/api/modules/navbar-search/featured-deals.module";
import { INavBarModule } from "@app/api/modules/navbar/navbar.module";

export const getComponent = (wordPressModule: WordPressPostModule) => {
  switch (wordPressModule.name) {
    case "NavBarModule":
      return <NavBarComponent navBarModule={wordPressModule as INavBarModule} />;
    case "FeaturedShopsModule":
      return <FeaturedShopsComponent {...wordPressModule as FeaturedStoresModule} />;
    default:
  }
};
