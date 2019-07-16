import { dummyNavbarSearchData, dummyNavbarSearchInitialData } from "./generate-dummy-data";

export const getInitialNavbarSearchDummyData = () => dummyNavbarSearchInitialData;
export const getFilteredNavbarSearchDummyData = (text: string) => {
  const data = dummyNavbarSearchData;
  const textUpperCase = text.toUpperCase();
  const foundShops = data.shops.filter(
    shop => shop.content.toUpperCase().includes(textUpperCase) || shop.title.toUpperCase().includes(textUpperCase)
  );
  const foundDeals = data.deals.filter(
    deal => deal.subtitle.toUpperCase().includes(textUpperCase) || deal.title.toUpperCase().includes(textUpperCase)
  );

  return {
    shops: foundShops.slice(0, 5),
    deals: foundDeals.slice(0, 5)
  };
};
