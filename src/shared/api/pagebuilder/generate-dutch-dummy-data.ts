import { PageModel } from "./page.model";
import uuid from "uuid";
import { dummyFeaturedShopsData } from "../modules/featured-shops/generate-dummy-data";
import { generateDummyNavbarDataDutch } from "../modules/navbar/generate-dummy-data";
import { generateHomePageHeaderDutch } from "../modules/homepage-header/generate-dummy-data";
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
import { generateBlogSingleHeaderData, generateBF2019HeaderDataDutch } from "../modules/blog-single-header/endpoint";
import { generateBlogOverviewHeaderDataDutch } from "../modules/blog-overview-header/endpoint";
import { generateBlogOverviewData } from "../modules/blog-overview/endpoint";
import { generateDummyFeaturedCategoriesData } from "../modules/featured-categories/generate-dummy-data";
import { generateFeaturedBlogDataDutch } from "../modules/featured-blog/endpoint";
import { generatedummyShopSingleHeaderData } from "../modules/shop-single-header/generate-dummy-data";
import { generateBlogBodyTextData, generateBlackFriday2019TextData } from "../core/blog-bodytext/endpoint";
import { generateFeaturedBlogDummyDataDutch } from "../modules/featured-blog/generate-dummy-data";
// import { generateNotYetImplemented } from "../modules/not-implemented/not-yet-implemented-module";
import { generateStoreOverviewModule } from "../modules/store-overview/generate-dummy-data";
import { generateNotFoundModuleDummyData } from "../modules/not-found/endpoints";
import { generateDealOverviewModule } from "../modules/deal-overview/generate-dummy-data";
import { generateDummyFooterDataDutch } from "../modules/footer/generate-dummy-data";
import { generateMediumHeroDummyDataDutch } from "../modules/medium-hero/generate-dummy-data";

export const dutchPageList: PageModel[] = [
  {
    id: uuid(),
    route: "/",
    metaData: {
      title: "Black Friday",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [
      generateDummyNavbarDataDutch(),
      generateHomePageHeaderDutch(),
      dummyFeaturedShopsData(),
      generateDummyBannerModule(),
      generateDummyFeaturedDealsData(),
      generateCtaNewsLetterModule(),
      generateFeaturedBlogDummyDataDutch(),
      generateHomepageBodytextDummyData(),
      generateDummyFooterDataDutch()
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
      generateDummyNavbarDataDutch(),
      generateMediumHeroDummyDataDutch(),
      generateStoreOverviewModule(),
      generateCtaNewsLetterModule(),
      generateDummyFooterDataDutch()
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
      generateDummyNavbarDataDutch(),
      generatedummyShopSingleHeaderData(),
      generateDummyFeaturedDealsData(),
      dummyFeaturedShopsData(),
      generateCtaNewsLetterModule(),
      generateShopSingleBodyTextInfoDummydata(),
      generateDummyFooterDataDutch()
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
      generateDummyNavbarDataDutch(),
      generateMediumHeroDummyDataDutch(),
      generateDealOverviewModule(),
      generateCtaSmallModule(),
      generateDummyFooterDataDutch()
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
      generateDummyNavbarDataDutch(),
      HeaderInfoDummy,
      generateDummyFeaturedCategoriesData(),
      generateDummyFeaturedDealsData(),
      generateDummyBannerModule(),
      // generateFeaturedShopsDummyData(),
      generateCtaNewsLetterModule(),
      generateProductLineDummyData(),
      generateDummyFooterDataDutch()
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
      generateDummyNavbarDataDutch(),
      generateBlogOverviewHeaderDataDutch(),
      generateBlogOverviewData(),
      generateDummyFeaturedDealsData(),
      generateCtaNewsLetterModule(),
      generateDummyFooterDataDutch()
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
      generateDummyNavbarDataDutch(),
      generateBlogSingleHeaderData(),
      generateBlogBodyTextData(),
      generateDummyFeaturedDealsData(),
      generateFeaturedBlogDataDutch(),
      generateCtaNewsLetterModule(),
      generateDummyFooterDataDutch()
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
      generateDummyNavbarDataDutch(),
      generateBF2019HeaderDataDutch(),
      generateBlackFriday2019TextData(),
      generateDummyFeaturedDealsData(),
      generateFeaturedBlogDataDutch(),
      generateCtaNewsLetterModule(),
      generateDummyFooterDataDutch()
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
    wordPressPostModules: [generateDummyNavbarDataDutch(), generateNotFoundModuleDummyData()]
  } as PageModel
];
