import * as React from "react";

import { NavBarComponent } from "@app/modules/nav-bar";
import { FeaturedShopsComponent } from "@app/modules/featured-shops/featured-shops.component";
import { FeaturedDealsComponent } from "@app/modules/featured-deals/featured-deals.component";
import { NotYetImplementedComponent } from "@app/modules/not-yet-implemented";
import { BannerModuleComponent } from "@app/modules/banner-module";
import { NavbarSearchComponent } from "@app/modules/navbar-search";

import { INavBarModule } from "@app/api/modules/navbar/navbar.module";
import { FeaturedStoresModule } from "@app/api/modules/featured-shops/featured-shops.module";
import { FeaturedDealsModule } from "@app/api/modules/featured-deals/featured-deals.module";
import { NotYetImplemented } from "@app/api/modules/not-implemented/not-yet-implemented-module";
import { BannerModule } from "@app/api/modules/banner/banner.module";
import { NavbarSearchModule } from "@app/api/modules/navbar-search/navbar-search.module";

import { Footer } from "@app/api/modules/footer/footer.module";

import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";

export const getComponent = (wordPressModule: WordPressPostModule) => {
  switch (wordPressModule.name) {
    case "NavBarModule":
      return <NavBarComponent navBarModule={wordPressModule as INavBarModule} />;
    case "FeaturedShopsModule":
      return <FeaturedShopsComponent {...wordPressModule as FeaturedStoresModule} />;
    case "FeaturedDealsComponent":
      return <FeaturedDealsComponent {...wordPressModule as FeaturedDealsModule} />;
    case "notYetImplemented":
      return <NotYetImplementedComponent notYetImplemented={wordPressModule as NotYetImplemented} />;
    case "BannerModule":
      return <BannerModuleComponent bannerProps={wordPressModule as BannerModule} />;
    // case "NavbarSearchComponent":
    //   return <NavbarSearchComponent {...wordPressModule as NavbarSearchModule} />;
    default:
  }
};
