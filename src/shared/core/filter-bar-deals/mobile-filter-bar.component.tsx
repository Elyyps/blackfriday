import React, { useState, useEffect } from "react";

import { MobileFilterComponent, IMobileFilterSelectedItems } from "../mobile-filter";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { IMobileFilterItem } from "../mobile-filter/mobile-filter-item";

export interface IDealsMobileFilterBarComponentProps {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];

  onFiltersChanged: (
    brandFilterItems: FilterItem[],
    categoryFilterItems: FilterItem[],
    storeFilterItem: FilterItem[],
    sortBy: string
  ) => void;
  sortBy: string;
  sortByOptions: string[];
  storeFilterItems: FilterItem[];
}

const totalStores = 10; // TODO: calculate filter totals!
const DealsMobileFilterBarComponent = (props: IDealsMobileFilterBarComponentProps) => {
  const [mobileFilters, setMobileFilters] = useState<IMobileFilterItem[]>([]);

  useEffect(() => {
    setMobileFilters(
      getMobileFilterItems(
        props.brandFilterItems,
        props.categoryFilterItems,
        props.sortBy,
        props.sortByOptions,
        props.storeFilterItems
      )
    );
  }, [props.brandFilterItems, props.categoryFilterItems, props.sortBy, props.sortByOptions, props.storeFilterItems]);

  const handleFinishSearch = (selectedItems: IMobileFilterSelectedItems[]) => {
    const brandFilters = props.brandFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });
    const categoryFilters = props.categoryFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });
    const storeFilters = props.storeFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });

    let sortBy = "";

    selectedItems.map(item => {
      if (item.title === "Merk") {
        brandFilters.forEach((filter: FilterItem) => {
          if (item.selectedItems.includes(filter.displayName)) {
            filter.isSelected = true;
          }
        });
      }
      if (item.title === "Categorieen") {
        categoryFilters.forEach((filter: FilterItem) => {
          if (item.selectedItems.includes(filter.displayName)) {
            filter.isSelected = true;
          }
        });
      }
      if (item.title === "Winkels") {
        storeFilters.forEach((filter: FilterItem) => {
          if (item.selectedItems.includes(filter.displayName)) {
            filter.isSelected = true;
          }
        });
      }
      if (item.title === "Sorteren") {
        sortBy = item.selectedItems.length > 0 ? item.selectedItems[0] : "Relevatie";
      }
    });

    props.onFiltersChanged(brandFilters, categoryFilters, storeFilters, sortBy);
  };

  const clearAllFilters = () => {
    const clearedBrandFilters = props.brandFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });
    const clearedCategoryFilters = props.categoryFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });
    const clearedStatusFilters = props.storeFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });

    props.onFiltersChanged(clearedBrandFilters, clearedCategoryFilters, clearedStatusFilters, "Relevantie");
  };

  return (
    <MobileFilterComponent
      onFinish={handleFinishSearch}
      totalStores={totalStores}
      onClear={clearAllFilters}
      filterItems={mobileFilters}
    />
  );
};

const getMobileFilterItems = (
  brandfilterItems: FilterItem[],
  categoryFilterItems: FilterItem[],
  selectedSortBy: string,
  sortByOptions: string[],
  storeFilterItems: FilterItem[]
): IMobileFilterItem[] => [
  {
    hasSearchBar: false,
    title: "Sorteren",
    searchBarPlaceholder: "Sorteren zoeken",
    selectedItems: [selectedSortBy],
    isSingleSelection: true,
    items: sortByOptions
  },
  {
    hasSearchBar: true,
    title: "Status",
    searchBarPlaceholder: "Status zoeken",
    selectedItems: [...getSelectedFilterItems(storeFilterItems)],
    items: [...getFilterItems(storeFilterItems)]
  },
  {
    hasSearchBar: true,
    title: "Categorieen",
    searchBarPlaceholder: "Categorieen zoeken",
    selectedItems: [...getSelectedFilterItems(categoryFilterItems)],
    items: [...getFilterItems(categoryFilterItems)]
  },
  {
    hasSearchBar: true,
    title: "Merk",
    searchBarPlaceholder: "Merk zoeken",
    selectedItems: [...getSelectedFilterItems(brandfilterItems)],
    items: [...getFilterItems(brandfilterItems)]
  }
];

const getFilterItems = (items: FilterItem[]): string[] => items.map(item => item.displayName);

const getSelectedFilterItems = (items: FilterItem[]): string[] => {
  const selectedItems = items.filter(item => item.isSelected);

  return selectedItems.map(item => item.displayName);
};

export { DealsMobileFilterBarComponent };
