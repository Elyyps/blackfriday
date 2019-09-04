import React, { useState, useEffect } from "react";

import { IMobileFilterSelectedItems } from "../mobile-filter";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { IMobileFilterItem } from "../mobile-filter/mobile-filter-item";
import { MobileFilterContainer } from "../mobile-filter/containers/mobile-filter-container";

export interface IStoresMobileFilterBarComponentProps {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];

  onFiltersChanged: (
    brandFilterItems: FilterItem[],
    categoryFilterItems: FilterItem[],
    statusFilterItem: FilterItem[],
    sortBy: string
  ) => void;
  sortBy: string;
  sortByOptions: string[];
  statusFilterItems: FilterItem[];
}

const StoresMobileFilterBarComponent = (props: IStoresMobileFilterBarComponentProps) => {
  const [mobileFilters, setMobileFilters] = useState<IMobileFilterItem[]>([]);
  const [totalStores, setTotalStores] = useState<number>(0);

  useEffect(() => {
    setMobileFilters(
      getMobileFilterItems(
        props.brandFilterItems,
        props.categoryFilterItems,
        props.sortBy,
        props.sortByOptions,
        props.statusFilterItems
      )
    );
  }, [props.brandFilterItems, props.categoryFilterItems, props.sortBy, props.sortByOptions, props.statusFilterItems]);

  const calculateStoreNumbers = (selectedItems: IMobileFilterSelectedItems[]) => {
    let count = 0;
    selectedItems.map(item => {
      if (item.title === "Merken") {
        props.brandFilterItems.forEach((filter: FilterItem) => {
          if (item.selectedItems.includes(filter.displayName)) {
            if (filter.totalAmount) count += filter.totalAmount;
          }
        });
      }
      if (item.title === "Categorieën") {
        props.categoryFilterItems.forEach((filter: FilterItem) => {
          if (item.selectedItems.includes(filter.displayName)) {
            if (filter.totalAmount) count += filter.totalAmount;
          }
        });
      }
      if (item.title === "Status") {
        props.statusFilterItems.forEach((filter: FilterItem) => {
          if (item.selectedItems.includes(filter.displayName)) {
            if (filter.totalAmount) count += filter.totalAmount;
          }
        });
      }
    });
    setTotalStores(count);
  };
  const handleFinishSearch = (selectedItems: IMobileFilterSelectedItems[]) => {
    const brandFilters = props.brandFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });
    const categoryFilters = props.categoryFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });
    const statusFilters = props.statusFilterItems.map((filter: FilterItem) => {
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
      if (item.title === "Categorieën") {
        categoryFilters.forEach((filter: FilterItem) => {
          if (item.selectedItems.includes(filter.displayName)) {
            filter.isSelected = true;
          }
        });
      }
      if (item.title === "Status") {
        statusFilters.forEach((filter: FilterItem) => {
          if (item.selectedItems.includes(filter.displayName)) {
            filter.isSelected = true;
          }
        });
      }
      if (item.title === "Sorteren") {
        sortBy = item.selectedItems.length > 0 ? item.selectedItems[0] : "Relevatie";
      }
    });

    props.onFiltersChanged(brandFilters, categoryFilters, statusFilters, sortBy);
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
    const clearedStatusFilters = props.statusFilterItems.map((filter: FilterItem) => {
      const result = { ...filter, isSelected: false };

      return result;
    });
    setTotalStores(0);
    props.onFiltersChanged(clearedBrandFilters, clearedCategoryFilters, clearedStatusFilters, "Relevantie");

  };

  return (
    <MobileFilterContainer
      onFilterChange={calculateStoreNumbers}
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
  statusFilterItems: FilterItem[]
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
    selectedItems: [...getSelectedFilterItems(statusFilterItems)],
    items: [...getFilterItems(statusFilterItems)]
  },
  {
    hasSearchBar: true,
    title: "Categorieën",
    searchBarPlaceholder: "Categorieën zoeken",
    selectedItems: [...getSelectedFilterItems(categoryFilterItems)],
    items: [...getFilterItems(categoryFilterItems)]
  },
  {
    hasSearchBar: true,
    title: "Merken",
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

export { StoresMobileFilterBarComponent };
