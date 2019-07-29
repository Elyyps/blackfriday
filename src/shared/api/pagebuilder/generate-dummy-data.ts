import { PageModel } from "./page.model";
import uuid from "uuid";
import { dummyFeaturedShopsData } from "../modules/featured-shops/generate-dummy-data";
import { generateDummyNavbarData } from "../modules/navbar/generate-dummy-data";
import { generateNotYetImplemented } from "../modules/not-implemented/not-yet-implemented-module";
import { generateHomePageHeader } from "../modules/homepage-header/generate-dummy-data";
import { generateDummyBannerModule } from "../modules/banner/generate-dummy-data";
import { generateDummyBodyTextModule } from "../modules/body-text/generate-dummy-data";
import { generateDummyFooterData } from "../modules/footer/generate-dummy-data";
import { generateMediumHeroDummyData } from "../modules/medium-hero/generate-dummy-data";
import { generateDummyStoresOverview } from "../modules/stores-overview/generate-dummy-data";
import { generateCtaSmallModule } from "../modules/cta-small/generate-dummy-data";
import { generateCtaNewsLetterModule } from "../modules/cta-newsletter/generate-dummy-data";
import { generateDummyFeaturedDealsData } from "../modules/featured-deals/generate-dummy-data";
import { generateBlogSingleHeaderData } from "../modules/blog-single-header/endpoint";
import { generateBlogOverviewData } from "../modules/blog-overview/endpoint";
import { generateDummyFeaturedCategoriesData } from "../modules/featured-categories/generate-dummy-data";
import { generateFeaturedBlogData } from "../modules/featured-blog/endpoint";
import { generateFeaturedShopsDummyData } from "../modules/featured-shops/endpoints";
import { generatedummyShopSingleHeaderData } from "../modules/shop-single-header/generate-dummy-data";

export const pageList: PageModel[] = [
  {
    id: uuid(),
    route: "/",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarData(),
      generateHomePageHeader(),
      dummyFeaturedShopsData(),
      generateDummyBannerModule(),
      generateDummyFeaturedDealsData(),
      generateCtaNewsLetterModule(),
      generateNotYetImplemented("Blog Featured Module"),
      generateDummyBodyTextModule("1"),
      generateDummyFooterData()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/stores-overview",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarData(),
      generateMediumHeroDummyData(),
      generateDummyStoresOverview(),
      generateCtaNewsLetterModule(),
      generateDummyFooterData()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/stores-single",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarData(),
      generatedummyShopSingleHeaderData(),
      generateDummyFeaturedDealsData(),
      dummyFeaturedShopsData(),
      generateCtaNewsLetterModule(),
      generateDummyBodyTextModule("2"),
      generateDummyFooterData()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/deals-overview",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarData(),
      generateMediumHeroDummyData(),
      generateDummyStoresOverview(),
      generateCtaSmallModule(),
      generateDummyFooterData()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/productline-overview",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarData(),
      generateMediumHeroDummyData(),
      generateDummyFeaturedCategoriesData(),
      generateDummyFeaturedDealsData(),
      generateDummyBannerModule(),
      generateFeaturedShopsDummyData(),
      generateCtaNewsLetterModule(),
      generateDummyBodyTextModule("3"),
      generateDummyFooterData()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/blog-overview",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarData(),
      generateMediumHeroDummyData(),
      generateBlogOverviewData(),
      generateDummyFeaturedDealsData(),
      generateCtaNewsLetterModule(),
      generateDummyFooterData()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/blog-single",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarData(),
      generateBlogSingleHeaderData(),
      generateNotYetImplemented("Blog BodyText"),
      generateDummyFeaturedDealsData(),
      generateFeaturedBlogData(),
      generateCtaNewsLetterModule(),
      generateDummyFooterData()
    ]
  } as PageModel
];
