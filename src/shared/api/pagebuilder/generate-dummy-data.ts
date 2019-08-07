import { PageModel } from "./page.model";
import uuid from "uuid";
import { dummyFeaturedShopsData } from "../modules/featured-shops/generate-dummy-data";
import { generateDummyNavbarData } from "../modules/navbar/generate-dummy-data";
import { generateHomePageHeader } from "../modules/homepage-header/generate-dummy-data";
import { generateDummyBannerModule } from "../modules/banner/generate-dummy-data";
import {
  generateProductLineDummyData,
  generateShopSingleBodyTextDummydata,
  generateHomepageBodytextDummyData
} from "../modules/body-text/generate-dummy-data";
import { generateDummyFooterData } from "../modules/footer/generate-dummy-data";
import { HeaderInfoDummy } from "../modules/header-info/generate-dummy-data";
import { generateMediumHeroDummyData } from "../modules/medium-hero/generate-dummy-data";
import { generateCtaSmallModule } from "../modules/cta-small/generate-dummy-data";
import { generateCtaNewsLetterModule } from "../modules/cta-newsletter/generate-dummy-data";
import { generateDummyFeaturedDealsData } from "../modules/featured-deals/generate-dummy-data";
import {
  generateBlogSingleHeaderData,
  generateBlogOverviewHeaderData,
  generateBF2019HeaderData
} from "../modules/blog-single-header/endpoint";
import { generateBlogOverviewData } from "../modules/blog-overview/endpoint";
import { generateDummyFeaturedCategoriesData } from "../modules/featured-categories/generate-dummy-data";
import { generateFeaturedBlogData } from "../modules/featured-blog/endpoint";
import { generatedummyShopSingleHeaderData } from "../modules/shop-single-header/generate-dummy-data";
import { generateBlogBodyTextData, generateBlackFriday2019TextData } from "../core/blog-bodytext/endpoint";
import { generateFeaturedBlogDummyData } from "../modules/featured-blog/generate-dummy-data";
import { generateNotYetImplemented } from "../modules/not-implemented/not-yet-implemented-module";
import { generateStoreOverviewModule } from "../modules/store-overview/generate-dummy-data";

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
      generateFeaturedBlogDummyData(),
      generateHomepageBodytextDummyData(),
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
      generateStoreOverviewModule(),
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
      generateShopSingleBodyTextDummydata(),
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
      generateNotYetImplemented("deals overview"),
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
      HeaderInfoDummy,
      generateDummyFeaturedCategoriesData(),
      generateDummyFeaturedDealsData(),
      generateDummyBannerModule(),
      // generateFeaturedShopsDummyData(),
      generateCtaNewsLetterModule(),
      generateProductLineDummyData(),
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
      generateBlogOverviewHeaderData(),
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
      generateBlogBodyTextData(),
      generateDummyFeaturedDealsData(),
      generateFeaturedBlogData(),
      generateCtaNewsLetterModule(),
      generateDummyFooterData()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/black-friday-2019",
    metaData: {
      title: "Black Friday 2019",
      content: "Black Friday 2019 informative page",
      description: "Black Friday 2019 informative page"
    },
    wordPressPostModules: [
      generateDummyNavbarData(),
      generateBF2019HeaderData(),
      generateBlackFriday2019TextData(),
      generateDummyFeaturedDealsData(),
      generateFeaturedBlogData(),
      generateCtaNewsLetterModule(),
      generateDummyFooterData()
    ]
  } as PageModel
];
