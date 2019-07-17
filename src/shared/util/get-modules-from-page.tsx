import * as React from "react";

import { NavBarComponent } from "@app/modules/nav-bar";
import { FeaturedShopsComponent } from "@app/modules/featured-shops/featured-shops.component";
import { FeaturedDealsComponent } from "@app/modules/featured-deals/featured-deals.component";
import { NotYetImplementedComponent } from "@app/modules/not-yet-implemented";
import { BannerModuleComponent } from "@app/modules/banner-module";
import { HomePageHeaderComponent } from "@app/modules/homepage-header";
import { BodytextComponent } from "@app/core/bodytext";
import { FooterComponent } from "@app/modules/footer";

import { INavBarModule } from "@app/api/modules/navbar/navbar.module";
import { FeaturedStoresModule } from "@app/api/modules/featured-shops/featured-shops.module";
import { FeaturedDealsModule } from "@app/api/modules/featured-deals/featured-deals.module";
import { NotYetImplemented } from "@app/api/modules/not-implemented/not-yet-implemented-module";
import { BannerModule } from "@app/api/modules/banner/banner.module";
import { HomepageHeader } from "@app/api/modules/homepage-header/homepage-header.module";
import { BodyTextModule } from "@app/api/modules/body-text/body-text";
import { Footer as FooterModule } from "@app/api/modules/footer/footer.module";

import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { NewsletterComponent } from "@app/core/newsletter";

export const getComponent = (wordPressModule: WordPressPostModule) => {
  switch (wordPressModule.name) {
    case "NavBarModule":
      return <NavBarComponent navBarModule={wordPressModule as INavBarModule} />;
    case "FeaturedStoresModule":
      return <FeaturedShopsComponent {...wordPressModule as FeaturedStoresModule} />;
    case "FeaturedDealsComponent":
      return <FeaturedDealsComponent {...wordPressModule as FeaturedDealsModule} />;
    case "notYetImplemented":
      return <NotYetImplementedComponent notYetImplemented={wordPressModule as NotYetImplemented} />;
    case "BannerModule":
      return <BannerModuleComponent bannerProps={wordPressModule as BannerModule} />;
    case "HomepageHeader":
      return <HomePageHeaderComponent homePageModule={wordPressModule as HomepageHeader} />;
    // case "BodyTextModule":
    //   return <BodytextComponent>{(wordPressModule as BodyTextModule).dummyJSX}</BodytextComponent>;
    case "FooterModule":
      return <FooterComponent footerModule={wordPressModule as FooterModule} />;
    case "FeaturedDealsModule":
      return <FeaturedDealsComponent {...wordPressModule as FeaturedDealsModule} />;
    case "NewsletterModule":
      return <NewsletterComponent />;
    default:
  }
};
