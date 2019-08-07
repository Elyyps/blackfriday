import { StoreOverviewModule } from "./store-overview.module";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { StoreApi } from "@app/api/core/store/endpoint";

export const generateStoreOverviewModule = (): StoreOverviewModule => ({
  brandFilterItems: generateBrandFilterItems(),
  categoryFilterItems: generateCategoryFilterItems(),
  sortBy: "Relevantie",
  statusFilterItems: generateStatusFilterItems(),
  id: "1",
  name: "StoreOverviewModule",
  stores: [],
  totalAmountOfStores: StoreApi.initialStoresResult.length
});

const generateStatusFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Bijna afgelopen",
    isSelected: false,
    totalAmount: StoreApi.getAmountForStatus("Bijna afgelopen")
  },
  {
    id: "2",
    displayName: "Nu geldig",
    isSelected: false,
    totalAmount: StoreApi.getAmountForStatus("Nu geldig")
  },
  {
    id: "3",
    displayName: "Start binnenkort",
    isSelected: false,
    totalAmount: StoreApi.getAmountForStatus("Start binnenkort")
  },
  {
    id: "4",
    displayName: "Verlopen",
    isSelected: false,
    totalAmount: StoreApi.getAmountForStatus("Verlopen")
  },
  {
    id: "5",
    displayName: "Onbekend",
    isSelected: false,
    totalAmount: StoreApi.getAmountForStatus("Onbekend")
  }
];

const generateCategoryFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Audio",
    isSelected: false,
    totalAmount: StoreApi.getAmountForCategory("Audio")
  },
  {
    id: "2",
    displayName: "Sport",
    isSelected: false,
    totalAmount: StoreApi.getAmountForCategory("Sport")
  },
  {
    id: "3",
    displayName: "Games",
    isSelected: false,
    totalAmount: StoreApi.getAmountForCategory("Games")
  },
  {
    id: "4",
    displayName: "Elektronisch",
    isSelected: false,
    totalAmount: StoreApi.getAmountForCategory("Elektronisch")
  },
  {
    id: "5",
    displayName: "Mode",
    isSelected: false,
    totalAmount: StoreApi.getAmountForCategory("Mode")
  },
  {
    id: "6",
    displayName: "Huishouden",
    isSelected: false,
    totalAmount: StoreApi.getAmountForCategory("Huishouden")
  }
];

const generateBrandFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Apple",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Apple")
  },
  {
    id: "2",
    displayName: "Jack & Jones",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Jack & Jones")
  },
  {
    id: "3",
    displayName: "Adidas",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Adidas")
  },
  {
    id: "4",
    displayName: "JBL",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("JBL")
  },
  {
    id: "5",
    displayName: "Converse",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Converse")
  },
  {
    id: "6",
    displayName: "Microsoft",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Microsoft")
  },
  {
    id: "7",
    displayName: "Guess",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Guess")
  },
  {
    id: "8",
    displayName: "Only",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Only")
  },
  {
    id: "9",
    displayName: "Happy Socks",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Happy Socks")
  },
  {
    id: "10",
    displayName: "Phillips",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Phillips")
  },
  {
    id: "11",
    displayName: "HP",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("HP")
  },
  {
    id: "12",
    displayName: "Nintendo",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Nintendo")
  },
  {
    id: "13",
    displayName: "Samsung",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Samsung")
  },
  {
    id: "14",
    displayName: "Sony",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Sony")
  },
  {
    id: "15",
    displayName: "Vodafone",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Vodafone")
  },
  {
    id: "16",
    displayName: "Nike",
    isSelected: false,
    totalAmount: StoreApi.getAmountForBrand("Nike")
  }
];
