import { dummyNavbarSearchData, dummyNavbarSearchInitialData } from "./generate-dummy-data";

export const getInitialNavbarSearchDummyData = () => dummyNavbarSearchInitialData;

const LIMIT = 5;
export const getFilteredNavbarSearchDummyData = (text: string) => {
  const data = dummyNavbarSearchData;
  const textUpperCase = text.toUpperCase();
  const foundShops = data.stores.filter(
    store => store.description.toUpperCase().includes(textUpperCase) || store.name.toUpperCase().includes(textUpperCase)
  );
  const foundDeals = data.deals.filter(
    deal =>
      (deal.subtitle || "").toUpperCase().includes(textUpperCase) ||
      (deal.title || "").toUpperCase().includes(textUpperCase)
  );

  return {
    shops: foundShops.slice(0, LIMIT),
    deals: foundDeals.slice(0, LIMIT)
  };
};
