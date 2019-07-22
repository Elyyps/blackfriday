import { IMobileFilterItem } from "./mobile-filter-item";

export const mobileFilterDummyData: IMobileFilterItem[] = [
  {
    hasSearchBar: false,
    title: "Sorteren",
    selectedItems: [],
    isSingleSelection: true,
    items: ["Alphabetically", "Order"]
  },
  { hasSearchBar: true, title: "Status", selectedItems: [], items: ["Nu geldig", "Bijna verlopen", "Lorem Ipsum"] },
  {
    hasSearchBar: true,
    title: "Categorie",
    selectedItems: [],
    items: ["Eletronics", "Fitness", "Music", "House and garden"]
  },
  { hasSearchBar: true, title: "Merk", selectedItems: [], items: ["Nike", "Adidas", "Reebok", "New Balance"] }
];
