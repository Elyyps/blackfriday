import { StoreStatus, Store } from "./store";
import { generateDemoStoreDummyData } from "./generate-dummy-data";
import { FilterItem } from "../filter/filter-item";
import { shuffle } from "@app/util/array";

const initialStoresResult = [...generateDemoStoreDummyData()];

const getStores = (
  skip: number,
  take: number,
  storeStatusFilters: FilterItem[],
  categoryFilters: FilterItem[],
  brandFilters: FilterItem[],
  sortBy?: string
): Store[] => {
  const selectedStoreStatus: StoreStatus | undefined = getSelectedStoreStatus(storeStatusFilters);
  const selectedCategoryFilters = getSelectedFilters(categoryFilters);
  const selectedBrandFilters = getSelectedFilters(brandFilters);

  let result = [...initialStoresResult];

  result = result.splice(skip, take);

  if (selectedStoreStatus !== undefined) {
    result = result.filter(store => {
      return store.status === selectedStoreStatus;
    });
  }

  if (selectedCategoryFilters !== undefined) {
    result = result.filter(store => {
      return store.categories.some(r => selectedCategoryFilters.includes(r));
    });
  }

  if (selectedBrandFilters !== undefined) {
    result = result.filter(store => {
      return store.availableBrands.some(r => selectedBrandFilters.includes(r));
    });
  }

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
      break;
  }

  return result;
};

const getSelectedStoreStatus = (filterItems: FilterItem[]): StoreStatus | undefined => {
  const selectedItem = filterItems.find(item => item.isSelected);

  if (selectedItem) {
    return convertToStatus(selectedItem.displayName);
  }

  return undefined;
};

const getSelectedFilters = (filterItems: FilterItem[]): string[] | undefined => {
  const selectedFilterItems = filterItems.filter(item => item.isSelected);

  if (selectedFilterItems && selectedFilterItems.length > 0) {
    return selectedFilterItems.map(item => item.displayName);
  }

  return undefined;
};

const convertToStatus = (value: string): StoreStatus => {
  switch (value) {
    case "Bijna afgelopen":
      return StoreStatus.AlmostOver;
    case "Nu geldig":
      return StoreStatus.NowValid;
    case "Start binnenkort":
      return StoreStatus.StartsSoon;
    case "Verlopen":
      return StoreStatus.Expired;
    case "Onbekend":
      return StoreStatus.Unknown;
    default:
      return StoreStatus.Unknown;
  }
};

const getAmountForStatus = (status: string): number => {
  const storeStatus = convertToStatus(status);

  const amount = initialStoresResult.filter(store => {
    return store.status === storeStatus;
  }).length;

  return amount;
};

const getAmountForCategory = (category: string): number => {
  return initialStoresResult.filter(store => {
    return store.categories.indexOf(category) > -1;
  }).length;
};

const getAmountForBrand = (brand: string): number => {
  return initialStoresResult.filter(store => {
    return store.availableBrands.indexOf(brand) > -1;
  }).length;
};

export const StoreApi = {
  getStores,
  getAmountForStatus,
  initialStoresResult,
  getAmountForCategory,
  getAmountForBrand
};
