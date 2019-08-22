import { DealOverviewModule } from "./deal-overview.module";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { DealApi } from "@app/api/core/deal/endpoint";
import IconDefault from "@assets/icons/sign.svg";

export const generateDealOverviewModule = (): DealOverviewModule => ({
  brandFilterItems: generateBrandFilterItems(),
  categoryFilterItems: generateCategoryFilterItems(),
  storeFilterItems: generateStoreFilterItems(),
  sortBy: "Relevantie",
  id: "1",
  name: "DealOverviewModule",
  deals: [],
  totalAmountOfStores: DealApi.initialStoresResult.length,
  emptyStateIcon: IconDefault
});

const generateCategoryFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Audio",
    isSelected: false,
    totalAmount: DealApi.getAmountForCategory("Audio")
  },
  {
    id: "2",
    displayName: "Sport",
    isSelected: false,
    totalAmount: DealApi.getAmountForCategory("Sport")
  },
  {
    id: "3",
    displayName: "Games",
    isSelected: false,
    totalAmount: DealApi.getAmountForCategory("Games")
  },
  {
    id: "4",
    displayName: "Elektronisch",
    isSelected: false,
    totalAmount: DealApi.getAmountForCategory("Elektronisch")
  },
  {
    id: "5",
    displayName: "Mode",
    isSelected: false,
    totalAmount: DealApi.getAmountForCategory("Mode")
  },
  {
    id: "6",
    displayName: "Huishouden",
    isSelected: false,
    totalAmount: DealApi.getAmountForCategory("Huishouden")
  }
];

const generateBrandFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Apple",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Apple")
  },
  {
    id: "2",
    displayName: "Jack & Jones",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Jack & Jones")
  },
  {
    id: "3",
    displayName: "Adidas",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Adidas")
  },
  {
    id: "4",
    displayName: "JBL",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("JBL")
  },
  {
    id: "5",
    displayName: "Converse",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Converse")
  },
  {
    id: "6",
    displayName: "Microsoft",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Microsoft")
  },
  {
    id: "7",
    displayName: "Guess",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Guess")
  },
  {
    id: "8",
    displayName: "Only",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Only")
  },
  {
    id: "9",
    displayName: "Happy Socks",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Happy Socks")
  },
  {
    id: "10",
    displayName: "Phillips",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Phillips")
  },
  {
    id: "11",
    displayName: "HP",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("HP")
  },
  {
    id: "12",
    displayName: "Nintendo",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Nintendo")
  },
  {
    id: "13",
    displayName: "Samsung",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Samsung")
  },
  {
    id: "14",
    displayName: "Sony",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Sony")
  },
  {
    id: "15",
    displayName: "Vodafone",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Vodafone")
  },
  {
    id: "16",
    displayName: "Nike",
    isSelected: false,
    totalAmount: DealApi.getAmountForBrand("Nike")
  }
];

const generateStoreFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Vodafone",
    isSelected: false,
    totalAmount: DealApi.getAmountForStore("Apple")
  },
  {
    id: "2",
    displayName: "De Bijenkorf",
    isSelected: false,
    totalAmount: DealApi.getAmountForStore("Jack & Jones")
  },
  {
    id: "3",
    displayName: "CoolBlue",
    isSelected: false,
    totalAmount: DealApi.getAmountForStore("Adidas")
  }
];
