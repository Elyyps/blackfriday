import * as React from "react";


import { MobileFilterComponent } from "@app/core/mobile-filter";
import { IMobileFilterItem } from "@app/core/mobile-filter/mobile-filter-item";

export interface IPlaygroundPedroComponentProps {}

const filterItems: IMobileFilterItem[] = [
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

const PlaygroundPedroComponent = () => {
  const [currentItems, setCurrentItems] = React.useState<IMobileFilterItem[]>(filterItems);

  return (
    <MobileFilterComponent
      totalStores={10}
      onClear={() => {
        const newItems: IMobileFilterItem[] = [];
        currentItems.forEach(item => {
          item.selectedItems = [];
          newItems.push(item);
        });
        setCurrentItems(newItems);
      }}
      onClose={() => {
      }}
      filterItems={currentItems}
    />
  );
};

export { PlaygroundPedroComponent };
