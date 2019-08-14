import * as React from "react";
/* tslint:disable*/

import { NavBarComponent } from "@app/modules/nav-bar";
import { FeaturedShopsComponent } from "@app/modules/featured-shops/featured-shops.component";
import { FeaturedDealsComponent } from "@app/modules/featured-deals/featured-deals.component";
import { FeaturedCategoriesContainer } from "@app/modules/featured-categories/container/featured-categories.container";
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
import { BannerModuleComponent } from "@app/modules/banner-module";
import { MediumHeroComponent } from "@app/modules/medium-hero";
import { MediumHeroModule } from "@app/api/modules/medium-hero/medium-hero";
import { ShopSingleHeaderComponent } from "@app/modules/shop-single-header";
import { ShopSingleHeaderModule } from "@app/api/modules/shop-single-header/shop-single-header.module";
import { CtaNewsletterModule } from "@app/api/modules/cta-newsletter/cta-newsletter.module";
import { CtaNewsletterComponent } from "@app/modules/cta-newsletter/cta-newsletter.component";
import { generateDummyFeaturedDealsData } from "@app/api/modules/featured-deals/generate-dummy-data";
import { BlogSingleHeaderComponent } from "@app/modules/blog-single-header";
import { BlogOverviewComponent } from "@app/modules/blog-overview";
import { BlogOverviewModule } from "@app/api/modules/blog-overview/blog-overview";
import { BlogOverviewHeaderComponent } from "@app/modules/blog-overview-header";
import { BlogOverviewHeaderModule } from "@app/api/modules/blog-overview-header/blog-overview-header";
import { generateDummyFeaturedCategoriesData } from "@app/api/modules/featured-categories/generate-dummy-data";
import { BodyTextModule } from "@app/api/modules/body-text/body-text";
import {
  generateHomepageBodytextDummyData,
  generateProductLineDummyData
} from "@app/api/modules/body-text/generate-dummy-data";
import { NewsletterModule } from "@app/api/modules/newsletter/newsletter";
import { BlogSingleHeaderModule } from "@app/api/modules/blog-single-header/blog-single-header";
import { FeaturedBlogComponent } from "@app/modules/featured-blog";
import { FeaturedBlogModule } from "@app/api/modules/featured-blog/featured-blog";
import { generateBodytextDummyData } from "@app/api/core/bodytext";
import { BodyTextComponent } from "@app/core/bodytext";
import { BlogBodyTextComponent } from "@app/modules/blog-body-text";
import { BlogBodyTextModule } from "@app/api/core/blog-bodytext/blog-bodytext";
import { StoreOverviewContainer } from "@app/modules/store-overview/containers/store-overview.container";
import { StoreOverviewModule } from "@app/api/modules/store-overview/store-overview.module";
import { HeaderInfoComponent } from "@app/modules/header-info";
import { HeaderInfo } from "@app/api/modules/header-info/header-info.module";
import { HomePageHeaderContainer } from "@app/modules/homepage-header/containers/homepage-header-container";
import { NavBarContainer } from "@app/modules/nav-bar/cointeners/nav-bar-containers";
import { NotFoundComponent } from "@app/modules/not-found";
import { NotFoundModule } from "@app/api/modules/not-found/not-found";

export const getComponent = (wordPressModule: WordPressPostModule) => {
  switch (wordPressModule.name) {
    case "BannerModule":
      return <BannerModuleComponent bannerModule={wordPressModule as BannerModule} />;
    case "CtaSmallModule":
      return <CtaSmallModuleComponent ctaSmallModule={wordPressModule as CtaSmallModule} />;
    case "CtaNewsletterModule":
      return <CtaNewsletterComponent ctaNewsLetterModule={wordPressModule as CtaNewsletterModule} />;
    case "FeaturedShopsModule":
      return <FeaturedShopsComponent {...wordPressModule as FeaturedStoresModule} />;
    case "FooterModule":
      return <FooterComponent footerModule={wordPressModule as FooterModule} />;
    case "HomepageHeader":
      return <HomePageHeaderContainer homePageModule={wordPressModule as HomepageHeader} />;
    case "MediumHeroModule":
      return <MediumHeroComponent mediumHeroModule={wordPressModule as MediumHeroModule} />;
    case "NavBarModule":
      return <NavBarContainer navBarModule={wordPressModule as INavBarModule} />;
    case "NewsletterModule":
      return <NewsletterComponent newsletterModule={wordPressModule as NewsletterModule} />;
    case "notYetImplemented":
      return <NotYetImplementedComponent notYetImplemented={wordPressModule as NotYetImplemented} />;
    case "ShopSingleHeaderModule":
      return <ShopSingleHeaderComponent shopSingleHeaderModule={wordPressModule as ShopSingleHeaderModule} />;
    case "StoreOverviewModule":
      return <StoreOverviewContainer storeOverviewModule={wordPressModule as StoreOverviewModule} />;
    case "BlogSingleHeaderModule":
      return <BlogSingleHeaderComponent blogSingleHeader={wordPressModule as BlogSingleHeaderModule} />;
    case "BlogOverviewModule":
      return <BlogOverviewComponent blog={wordPressModule as BlogOverviewModule} />;
    case "BlogOverviewHeaderModule":
      return <BlogOverviewHeaderComponent blogOverviewHeader={wordPressModule as BlogOverviewHeaderModule} />;
    case "BlogBodyTextModule":
      return <BlogBodyTextComponent blogBodyTextModule={wordPressModule as BlogBodyTextModule} />;
    case "FeaturedBlogModule":
      return <FeaturedBlogComponent featuredBlog={wordPressModule as FeaturedBlogModule} />;
    case "BodyTextModule":
      const bodyTextModule = wordPressModule as BodyTextModule;
      return <BodyTextComponent style={bodyTextModule.style} bodyTextModule={bodyTextModule as BodyTextModule} />;
    case "FeaturedDealsModule":
      return <FeaturedDealsComponent featuredDealsModule={generateDummyFeaturedDealsData()} />;
    case "FeaturedCategoriesModule":
      return <FeaturedCategoriesContainer featuredCategoriesModule={generateDummyFeaturedCategoriesData()} />;
    case "HeaderInfo":
      return <HeaderInfoComponent headerInfo={wordPressModule as HeaderInfo} />;
    case "NotFoundModule":
      return <NotFoundComponent notFoundModule={wordPressModule as NotFoundModule} />;
    default:
  }
};
