import { IMobileFilterItem } from "./mobile-filter-item";

export const mobileFilterDummyData: IMobileFilterItem[] = [
  {
    hasSearchBar: true,
    title: "Sorteren",

    selectedItems: ["Alphabetically"],
    isSingleSelection: true,
    items: ["Alphabetically", "Order"]
  },
  {
    hasSearchBar: true,
    title: "Status",
    searchBarPlaceholder: "Search in Status",
    selectedItems: [],
    items: ["Nu geldig", "Bijna verlopen", "Lorem Ipsum"]
  },
  {
    hasSearchBar: true,
    title: "Categorie",
    searchBarPlaceholder: "Search in Categories",
    selectedItems: [],
    items: ["Eletronics", "Fitness", "Music", "House and garden"]
  },
  {
    hasSearchBar: true,
    title: "Merk",
    searchBarPlaceholder: "Search in Brands",
    selectedItems: [],
    items: ["Nike", "Adidas", "Reebok", "New Balance"]
  }
];
