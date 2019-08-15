import { Deal } from "./deal";
import { generateDemoDealDummyData } from "./generate-dummy-data";
import { FilterItem } from "../filter/filter-item";
import { shuffle } from "@app/util/array";
/* tslint:disable */
export interface IDealResult {
  deals: Deal[];
  totalResults: number;
}

const initialStoresResult = [...generateDemoDealDummyData()];

const getStores = (
  skip: number,
  take: number,
  storeFilters: FilterItem[],
  categoryFilters: FilterItem[],
  brandFilters: FilterItem[],
  sortBy?: string
): IDealResult => {
  const selectedCategoryFilters = getSelectedFilters(categoryFilters);
  const selectedBrandFilters = getSelectedFilters(brandFilters);
  const selectedStoreFilters = getSelectedFilters(storeFilters);

  let result = [...initialStoresResult];

  if (selectedCategoryFilters !== undefined) {
    result = result.filter(deal => {
      const items = deal.categories.filter(category => {
        return selectedCategoryFilters.includes(category);
      });

      return items.length > 0;
    });
  }

  if (selectedBrandFilters !== undefined) {
    result = result.filter(deal => {
      const items = deal.availableBrands.filter(category => {
        return selectedBrandFilters.includes(category);
      });

      return items.length > 0;
    });
  }

  if (selectedStoreFilters !== undefined) {
    result = result.filter(deal => {
      const items = deal.availableBrands.filter(category => {
        return selectedStoreFilters.includes(category);
      });

      return items.length > 0;
    });
  }

  const totalResults = result.length;

  result = result.splice(skip, take);

  switch (sortBy) {
    case "Relevantie":
      // Keep default sorting
      break;
    case "Nieuwste":
      result.reverse();
      break;
    case "Populair":
      result = shuffle(result);
      break;
    case "Winkels A - Z":
      result = result.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (b.name < a.name) {
          return 1;
        }

        return 0;
      });
      break;
    case "Winkels Z - A":
      result = result.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }

        return 0;
      });
      break;
    default:
      /* tslint:disable:switch-final-break  */
      // keep default sorting
      break;
  }

  return {
    deals: result,
    totalResults
  };
};

const getSelectedFilters = (filterItems: FilterItem[]): string[] | undefined => {
  const selectedFilterItems = filterItems.filter(item => item.isSelected);

  if (selectedFilterItems && selectedFilterItems.length > 0) {
    return selectedFilterItems.map(item => item.displayName);
  }

  return undefined;
};

const getAmountForCategory = (category: string): number =>
  initialStoresResult.filter(deal => deal.categories.indexOf(category) > -1).length;

const getAmountForBrand = (brand: string): number =>
  initialStoresResult.filter(deal => deal.availableBrands.indexOf(brand) > -1).length;

const getAmountForStore = (store: string): number =>
  initialStoresResult.filter(deal => deal.stores.indexOf(store) > -1).length;

export const DealApi = {
  getStores,
  initialStoresResult,
  getAmountForCategory,
  getAmountForBrand,
  getAmountForStore
};
