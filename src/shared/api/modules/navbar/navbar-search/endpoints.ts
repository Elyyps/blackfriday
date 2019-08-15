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
      (deal.stores[0] || "").toUpperCase().includes(textUpperCase) ||
      (deal.name || "").toUpperCase().includes(textUpperCase)
  );

  return {
    shops: foundShops.slice(0, LIMIT),
    deals: foundDeals.slice(0, LIMIT)
  };
};
