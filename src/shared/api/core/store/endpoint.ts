import { StoreStatus, Store } from "./store";
import { generateDemoStoreDummyData } from "./generate-dummy-data";
import { FilterItem } from "../filter/filter-item";
import { shuffle } from "@app/util/array";

export interface IStoreResult {
  stores: Store[];
  totalResults: number;
}

const initialStoresResult = [...generateDemoStoreDummyData()];

const getStores = (
  skip: number,
  take: number,
  storeStatusFilters: FilterItem[],
  categoryFilters: FilterItem[],
  brandFilters: FilterItem[],
  sortBy?: string
): IStoreResult => {
  const selectedStoreStatus: StoreStatus | undefined = getSelectedStoreStatus(storeStatusFilters);
  const selectedCategoryFilters = getSelectedFilters(categoryFilters);
  const selectedBrandFilters = getSelectedFilters(brandFilters);

  let result = [...initialStoresResult];

  if (selectedStoreStatus !== undefined) {
    result = result.filter(store => store.status === selectedStoreStatus);
  }

  if (selectedCategoryFilters !== undefined) {
    result = result.filter(store => store.categories.some(r => selectedCategoryFilters.includes(r)));
  }

  if (selectedBrandFilters !== undefined) {
    result = result.filter(store => store.availableBrands.some(r => selectedBrandFilters.includes(r)));
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
    stores: result,
    totalResults
  };
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

  const amount = initialStoresResult.filter(store => store.status === storeStatus).length;

  return amount;
};

const getAmountForCategory = (category: string): number =>
  initialStoresResult.filter(store => store.categories.indexOf(category) > -1).length;

const getAmountForBrand = (brand: string): number =>
  initialStoresResult.filter(store => store.availableBrands.indexOf(brand) > -1).length;

export const StoreApi = {
  getStores,
  getAmountForStatus,
  initialStoresResult,
  getAmountForCategory,
  getAmountForBrand
};
