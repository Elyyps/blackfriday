import { StoreOverviewModule } from "./store-overview.module";
import { FilterItem } from "@app/api/core/filter/filter-item";

export const generateStoreOverviewModule = (): StoreOverviewModule => ({
  brandFilterItems: generateBrandFilterItems(),
  categoryFilterItems: generateCategoryFilterItems(),
  sortBy: "Relevantie",
  statusFilterItems: generateStatusFilterItems(),
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "StoreOverviewModule"
});

const generateStatusFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Nu geldig",
    isSelected: false,
    totalAmount: 22
  },
  {
    id: "2",
    displayName: "Bijna afgelopen",
    isSelected: false,
    totalAmount: 33
  }
];

const generateCategoryFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Audio",
    isSelected: false,
    totalAmount: 12
  },
  {
    id: "2",
    displayName: "Sport",
    isSelected: false,
    totalAmount: 20
  },
  {
    id: "3",
    displayName: "Games",
    isSelected: false,
    totalAmount: 9
  },
  {
    id: "4",
    displayName: "Elektronisch",
    isSelected: false,
    totalAmount: 3
  },
  {
    id: "5",
    displayName: "Mode",
    isSelected: false,
    totalAmount: 2
  }
];

const generateBrandFilterItems = (): FilterItem[] => [
  {
    id: "1",
    displayName: "Apple",
    isSelected: false,
    totalAmount: 28
  },
  {
    id: "2",
    displayName: "Jack & Jones",
    isSelected: false,
    totalAmount: 1
  },
  {
    id: "3",
    displayName: "Adidas",
    isSelected: false,
    totalAmount: 3
  },
  {
    id: "4",
    displayName: "JBL",
    isSelected: false,
    totalAmount: 8
  },
  {
    id: "5",
    displayName: "Converse",
    isSelected: false,
    totalAmount: 17
  },
  {
    id: "6",
    displayName: "Microsoft",
    isSelected: false,
    totalAmount: 9
  },
  {
    id: "7",
    displayName: "Guess",
    isSelected: false,
    totalAmount: 16
  },
  {
    id: "8",
    displayName: "Only",
    isSelected: false,
    totalAmount: 2
  },
  {
    id: "9",
    displayName: "Happy Socks",
    isSelected: false,
    totalAmount: 28
  },
  {
    id: "10",
    displayName: "Phillips",
    isSelected: false,
    totalAmount: 11
  },
  {
    id: "11",
    displayName: "HP",
    isSelected: false,
    totalAmount: 3
  },
  {
    id: "12",
    displayName: "Nintendo",
    isSelected: false,
    totalAmount: 20
  },
  {
    id: "13",
    displayName: "Samsung",
    isSelected: false,
    totalAmount: 11
  },
  {
    id: "14",
    displayName: "Sony",
    isSelected: false,
    totalAmount: 9
  }
];
