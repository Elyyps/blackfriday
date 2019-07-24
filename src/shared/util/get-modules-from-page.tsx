import * as React from "react";

import { NavBarComponent } from "@app/modules/nav-bar";
import { FeaturedShopsComponent } from "@app/modules/featured-shops/featured-shops.component";
import { FeaturedDealsComponent } from "@app/modules/featured-deals/featured-deals.component";
import { NotYetImplementedComponent } from "@app/modules/not-yet-implemented";
import { HomePageHeaderComponent } from "@app/modules/homepage-header";
import { FooterComponent } from "@app/modules/footer";
import { CtaSmallModuleComponent } from "@app/modules/cta-small";
import { INavBarModule } from "@app/api/modules/navbar/navbar.module";
import { FeaturedStoresModule } from "@app/api/modules/featured-shops/featured-shops.module";
import { NotYetImplemented } from "@app/api/modules/not-implemented/not-yet-implemented-module";
import { BannerModule } from "@app/api/modules/banner/banner.module";
import { HomepageHeader } from "@app/api/modules/homepage-header/homepage-header.module";
import { CtaSmallModule } from "@app/api/modules/cta-small/cta-small.module";
import { Footer as FooterModule } from "@app/api/modules/footer/footer.module";
import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { NewsletterComponent } from "@app/core/newsletter";
import { BannerComponent } from "@app/core/banner";
import { MediumHeroComponent } from "@app/modules/medium-hero";
import { MediumHeroModule } from "@app/api/modules/medium-hero/medium-hero";
import { ShopSingleHeaderComponent } from "@app/modules/shop-single-header";
import { ShopSingleHeaderModule } from "@app/api/modules/shop-single-header/shop-single-header.module";
import { StoresOverviewContainer } from "@app/modules/stores-overview/container/stores-overview.container";
import { CtaNewsletterModule } from "@app/api/modules/cta-newsletter/cta-newsletter.module";
import { CtaNewsletterComponent } from "@app/modules/cta-newsletter/cta-newsletter.component";
import { generateDummyFeaturedDealsData } from "@app/api/modules/featured-deals/generate-dummy-data";
import { BlogOverviewComponent } from "@app/modules/blog-overview";
import { BlogOverviewModule } from "@app/api/modules/blog-overview/blog-overview";

export const getComponent = (wordPressModule: WordPressPostModule) => {
  switch (wordPressModule.name) {
    case "BannerModule":
      return <BannerComponent bannerModule={wordPressModule as BannerModule} />;
    case "CtaSmallModule":
      return <CtaSmallModuleComponent ctaSmallModule={wordPressModule as CtaSmallModule} />;
    case "CtaNewsletterModule":
      return <CtaNewsletterComponent ctaNewsLetterModule={wordPressModule as CtaNewsletterModule} />;
    case "FeaturedShopsModule":
      return <FeaturedShopsComponent {...wordPressModule as FeaturedStoresModule} />;
    case "FooterModule":
      return <FooterComponent footerModule={wordPressModule as FooterModule} />;
    case "HomepageHeader":
      return <HomePageHeaderComponent homePageModule={wordPressModule as HomepageHeader} />;
    case "MediumHeroModule":
      return <MediumHeroComponent mediumHeroModule={wordPressModule as MediumHeroModule} />;
    case "NavBarModule":
      return <NavBarComponent navBarModule={wordPressModule as INavBarModule} />;
    case "NewsletterModule":
      return <NewsletterComponent />;
    case "notYetImplemented":
      return <NotYetImplementedComponent notYetImplemented={wordPressModule as NotYetImplemented} />;
    case "ShopSingleHeaderModule":
      return <ShopSingleHeaderComponent shopSingleHeaderModule={wordPressModule as ShopSingleHeaderModule} />;
    case "StoresOverviewModule":
      return <StoresOverviewContainer />;
    case "BlogOverviewModule":
      return <BlogOverviewComponent blog={wordPressModule as BlogOverviewModule} />;

    // case "BodyTextModule":
    //   return <BodytextComponent bodyTextModule={wordPressModule as BodyTextModule} />;
    case "FeaturedDealsModule":
      return <FeaturedDealsComponent featuredDealsModule={generateDummyFeaturedDealsData()} />;

    default:
  }
};
