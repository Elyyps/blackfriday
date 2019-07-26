import { getShopCards } from "./stores-overview.module";
import {
  generateDummyStoresOverview,
  generateEmptyDummyStoresOverview,
  generateDummyStoresOverviewForInfiniteScrolling
} from "./generate-dummy-data";

export const filterShopsOverviewCards = getShopCards;
export const generateShopsOverviewData = generateDummyStoresOverview;
export const generateEmptyShopsOverviewData = generateEmptyDummyStoresOverview;

export const generateShopsOverviewDataForInfiniteScrolling = generateDummyStoresOverviewForInfiniteScrolling;
