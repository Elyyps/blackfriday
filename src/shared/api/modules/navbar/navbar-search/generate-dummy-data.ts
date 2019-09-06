import { NavbarSearchModuleInitial } from "./navbar-search-initial";
import { NavbarSearchModule } from "./navbar-search.module";
import { generateDemoStoreDummyData } from "@app/api/core/store/generate-dummy-data";
import { generateDemoDealDummyData } from "@app/api/core/deal/generate-dummy-data";

export const dummyNavbarSearchInitialData: NavbarSearchModuleInitial = {
  titleDeals: "Gevonden deals",
  titleShops: "Gevonden winkels"
};
const LIMIT = 5;
export const dummyNavbarSearchData: NavbarSearchModule = {
  deals: generateDemoDealDummyData(),
  stores: generateDemoStoreDummyData().slice(0, LIMIT)
};
