import { PageModel } from "./page.model";
import uuid from "uuid";
import { dummyFeaturedShopsData } from "../modules/featured-shops/generate-dummy-data";
import { generateDummyNavbarData } from "../modules/navbar/generate-dummy-data";
import { generateNotYetImplemented } from "../modules/not-implemented/not-yet-implemented-module";
import { generateHomePageHeader } from "../modules/homepage-header/generate-dummy-data";
import { generateDummyBannerModule } from "../modules/banner/generate-dummy-data";
import { dummyFeaturedDealsData } from "../modules/featured-deals/generate-dummy-data";
import { generateDummyNewsletterModule } from "../modules/newsletter/generate-dummy-data";
import {
  generateDummyBodyTextModule,
  generateHomepageBodytextDummyData,
  generateShopSingleDummydata,
  generateProductLineDummyData
} from "../modules/body-text/generate-dummy-data";
import { generateDummyFooterData } from "../modules/footer/generate-dummy-data";
import { generateMediumHeroDummyData } from "../modules/medium-hero/generate-dummy-data";
import { generateDummyStoresOverview } from "../modules/stores-overview/generate-dummy-data";
import { generateFeaturedDealsDummyData } from "../modules/featured-deals/endpoints";
import { generateFeaturedShopsDummyData } from "../modules/featured-shops/endpoints";

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
      dummyFeaturedDealsData(),
      generateNotYetImplemented("Call to action Module"),
      generateNotYetImplemented("Blog Featured Module"),
      generateDummyBodyTextModule(generateHomepageBodytextDummyData()),
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
      generateDummyNewsletterModule(),
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
      generateNotYetImplemented("Winkel Single informatie"),
      dummyFeaturedDealsData(),
      dummyFeaturedShopsData(),
      generateDummyNewsletterModule(),
      generateDummyBodyTextModule(generateShopSingleDummydata()),
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
      generateDummyNewsletterModule(),
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
      generateNotYetImplemented("Featured Categories"),
      generateFeaturedDealsDummyData(),
      generateDummyBannerModule(),
      generateFeaturedShopsDummyData(),
      generateDummyNewsletterModule(),
      generateDummyBodyTextModule(generateProductLineDummyData()),
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
      generateNotYetImplemented("Blog Overview Module"),
      generateFeaturedDealsDummyData(),
      generateDummyNewsletterModule(),
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
      generateNotYetImplemented("Blog Single Header"),
      generateNotYetImplemented("Blog BodyText"),
      generateFeaturedDealsDummyData(),
      generateNotYetImplemented("Blog Featured"),
      generateDummyNewsletterModule(),
      generateDummyFooterData()
    ]
  } as PageModel
];
