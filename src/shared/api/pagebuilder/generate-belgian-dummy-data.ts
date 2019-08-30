import { PageModel } from "./page.model";
import uuid from "uuid";
import { dummyFeaturedShopsData } from "../modules/featured-shops/generate-dummy-data";
import { generateDummyNavbarDataBelgian } from "../modules/navbar/generate-dummy-data";
import { generateHomePageHeaderBelgian } from "../modules/homepage-header/generate-dummy-data";
import { generateDummyBannerModule } from "../modules/banner/generate-dummy-data";
import {
  generateProductLineDummyData,
  generateHomepageBodytextDummyData,
  generateShopSingleBodyTextInfoDummydata
} from "../modules/body-text/generate-dummy-data";
import { HeaderInfoDummy } from "../modules/header-info/generate-dummy-data";
import { generateCtaSmallModule } from "../modules/cta-small/generate-dummy-data";
import { generateCtaNewsLetterModule } from "../modules/cta-newsletter/generate-dummy-data";
import { generateDummyFeaturedDealsData } from "../modules/featured-deals/generate-dummy-data";
import { generateBlogSingleHeaderData, generateBF2019HeaderDataBelgian } from "../modules/blog-single-header/endpoint";
import { generateBlogOverviewHeaderDataBelgian } from "../modules/blog-overview-header/endpoint";
import { generateBlogOverviewDataBelgian } from "../modules/blog-overview/endpoint";
import { generateDummyFeaturedCategoriesData } from "../modules/featured-categories/generate-dummy-data";
import { generateFeaturedBlogDataBelgian } from "../modules/featured-blog/endpoint";
import { generatedummyShopSingleHeaderData } from "../modules/shop-single-header/generate-dummy-data";
import { generateBlogBodyTextData, generateBlackFriday2019TextData } from "../core/blog-bodytext/endpoint";
import { generateFeaturedBlogDummyDataBelgian } from "../modules/featured-blog/generate-dummy-data";
// import { generateNotYetImplemented } from "../modules/not-implemented/not-yet-implemented-module";
import { generateStoreOverviewModule } from "../modules/store-overview/generate-dummy-data";
import { generateNotFoundModuleDummyData } from "../modules/not-found/endpoints";
import { generateDealOverviewModule } from "../modules/deal-overview/generate-dummy-data";
import { generateDummyFooterDataBelgian } from "../modules/footer/generate-dummy-data";
import { generateMediumHeroDummyDataBelgian } from "../modules/medium-hero/generate-dummy-data";

export const belgianPageList: PageModel[] = [
  {
    id: uuid(),
    route: "/",
    metaData: {
      title: "Black Friday",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarDataBelgian(),
      generateHomePageHeaderBelgian(),
      dummyFeaturedShopsData(),
      generateDummyBannerModule(),
      generateDummyFeaturedDealsData(),
      generateCtaNewsLetterModule(),
      generateFeaturedBlogDummyDataBelgian(),
      generateHomepageBodytextDummyData(),
      generateDummyFooterDataBelgian()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/stores-overview",
    metaData: {
      title: "Winkel overzicht",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarDataBelgian(),
      generateMediumHeroDummyDataBelgian(),
      generateStoreOverviewModule(),
      generateCtaNewsLetterModule(),
      generateDummyFooterDataBelgian()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/stores-single",
    metaData: {
      title: "Winkel pagina",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarDataBelgian(),
      generatedummyShopSingleHeaderData(),
      generateDummyFeaturedDealsData(),
      dummyFeaturedShopsData(),
      generateCtaNewsLetterModule(),
      generateShopSingleBodyTextInfoDummydata(),
      generateDummyFooterDataBelgian()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/deals-overview",
    metaData: {
      title: "Deals overzicht",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarDataBelgian(),
      generateMediumHeroDummyDataBelgian(),
      generateDealOverviewModule(),
      generateCtaSmallModule(),
      generateDummyFooterDataBelgian()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/productline-overview",
    metaData: {
      title: "Productlijn overzicht",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarDataBelgian(),
      HeaderInfoDummy,
      generateDummyFeaturedCategoriesData(),
      generateDummyFeaturedDealsData(),
      generateDummyBannerModule(),
      // generateFeaturedShopsDummyData(),
      generateCtaNewsLetterModule(),
      generateProductLineDummyData(),
      generateDummyFooterDataBelgian()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/blog-overview",
    metaData: {
      title: "Blog overzicht",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarDataBelgian(),
      generateBlogOverviewHeaderDataBelgian(),
      generateBlogOverviewDataBelgian(),
      generateDummyFeaturedDealsData(),
      generateCtaNewsLetterModule(),
      generateDummyFooterDataBelgian()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/blog-single",
    metaData: {
      title: "Blog pagina",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarDataBelgian(),
      generateBlogSingleHeaderData(),
      generateBlogBodyTextData(),
      generateDummyFeaturedDealsData(),
      generateFeaturedBlogDataBelgian(),
      generateCtaNewsLetterModule(),
      generateDummyFooterDataBelgian()
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
      generateDummyNavbarDataBelgian(),
      generateBF2019HeaderDataBelgian(),
      generateBlackFriday2019TextData(),
      generateDummyFeaturedDealsData(),
      generateFeaturedBlogDataBelgian(),
      generateCtaNewsLetterModule(),
      generateDummyFooterDataBelgian()
    ]
  } as PageModel,
  {
    id: uuid(),
    route: "/not-found",
    metaData: {
      title: "Black Friday 2019",
      content: "Black Friday 2019 informative page",
      description: "Black Friday 2019 informative page"
    },
    wordPressPostModules: [generateDummyNavbarDataBelgian(), generateNotFoundModuleDummyData()]
  } as PageModel
];
