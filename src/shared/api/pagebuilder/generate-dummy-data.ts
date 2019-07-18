import { PageModel } from "./page.model";
import uuid from "uuid";
import { dummyFeaturedShopsData } from "../modules/featured-shops/generate-dummy-data";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateDummyNavbarData } from "../modules/navbar/generate-dummy-data";
import { generateNotYetImplemented } from "../modules/not-implemented/not-yet-implemented-module";
import { generateHomePageHeader } from "../modules/homepage-header/generate-dummy-data";
import { generateDummyBannerModule } from "../modules/banner/generate-dummy-data";
import { dummyFeaturedDealsData } from "../modules/featured-deals/generate-dummy-data";
import { generateDummyNewsletterModule } from "../modules/newsletter/generate-dummy-data";
import {
  generateDummyBodyTextModule,
  generateHomepageBodytextDummyData,
  generateShopSingleDummydata
} from "../modules/body-text/generate-dummy-data";
import { generateDummyFooterData } from "../modules/footer/generate-dummy-data";
import { MediumHeroComponent } from "@app/modules/medium-hero";
import { generateMediumHeroDummyData } from "../modules/medium-hero/generate-dummy-data";
import { generateDummyStoresOverview } from "../modules/stores-overview/generate-dummy-data";

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
      generateNotYetImplemented("Call to action nieuwsbrief"),
      generateNotYetImplemented("Ook interessant om te lezen"),
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
    wordPressPostModules: [generateDummyNavbarData()]
  } as PageModel,
  {
    id: uuid(),
    route: "/blog-overview",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [generateDummyNavbarData()]
  } as PageModel,
  {
    id: uuid(),
    route: "/blog-single",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [generateDummyNavbarData()]
  } as PageModel
];
