import * as React from "react";

import styles from "./filter-bar-component.module.scss";
import { MobileFilterComponent, IMobileFilterSelectedItems } from "../mobile-filter";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { IMobileFilterItem } from "../mobile-filter/mobile-filter-item";
import { useState, useEffect } from "react";

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
      if (item.title === "Categorieen") {
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

    props.onFiltersChanged(clearedBrandFilters, clearedCategoryFilters, clearedStatusFilters, "Relevantie");
  };

  return (
    <MobileFilterComponent
      onFinish={handleFinishSearch}
      totalStores={10}
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
    selectedItems: [selectedSortBy],
    isSingleSelection: true,
    items: sortByOptions
  },
  {
    hasSearchBar: true,
    title: "Status",
    selectedItems: [...getSelectedFilterItems(statusFilterItems)],
    items: [...getFilterItems(statusFilterItems)]
  },
  {
    hasSearchBar: true,
    title: "Categorieen",
    selectedItems: [...getSelectedFilterItems(categoryFilterItems)],
    items: [...getFilterItems(categoryFilterItems)]
  },
  {
    hasSearchBar: true,
    title: "Merk",
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
