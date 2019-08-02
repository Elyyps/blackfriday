import React from "react";
import styles from "./filter-bar-component.module.scss";
import HandPointing from "@assets/icons/hand-pointing.svg";
import StoreIcon from "@assets/icons/store.svg";
import { IconComponent } from "@app/prep/modules-prep/core";
import { CheckboxDropdown } from "../checkbox-dropdown/checkbox-dropdown.component";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { SearchableCheckboxDropdown } from "../searchable-checkbox-dropdown/searchable-checkbox-dropdown.component";
import { SelectComponent } from "../select";
import { FilterBarContainerProps } from "./container";
import { IScreenSize, ViewType } from "@app/stores/settings";
import { MobileFilterComponent, mobileFilterDummyData } from "../mobile-filter";
import { IMobileFilterItem } from "../mobile-filter/mobile-filter-item";
import { StoresMobileFilterBarComponent } from "./mobile-filter-bar.component";

export interface IFilterBarProps {}

const FilterBar = (props: IFilterBarProps & FilterBarContainerProps) => {
  const onStatusFilterItemsChanged = (items: FilterItem[]) => {
    props.setStatusFilters([...items]);
  };

  const onCategoryFilterItemsChanged = (items: FilterItem[]) => {
    props.setCategoryFilters([...items]);
  };

  const onBrandFilterItemsChanged = (items: FilterItem[]) => {
    props.setBrandFilters([...items]);
  };

  const setSort = (sortByString: string) => {
    props.setSortBy(sortByString);
  };

  const sortByOptions = ["Relevatie", "Nieuwste", "Populair", "Winkels A - Z", "Winkels Z - A"];

  const getTotalNumberOfFilters = (): number =>
    props.statusFilterItems.filter(item => item.isSelected).length +
    props.categoryFilterItems.filter(item => item.isSelected).length +
    props.brandFilterItems.filter(item => item.isSelected).length;

  const mobileFiltersChanged = (
    brandFilterItems: FilterItem[],
    categoryFilterItems: FilterItem[],
    statusFilterItem: FilterItem[],
    sortBy: string
  ) => {
    props.setBrandFilters([...brandFilterItems]);
    props.setCategoryFilters([...categoryFilterItems]);
    props.setStatusFilters([...statusFilterItem]);
    props.setSortBy(sortBy);
  };

  return (
    <div className="uk-container">
      {props.screenSize && props.screenSize.viewType > ViewType.Tablet ? (
        <div className={styles["filter-bar"]}>
          <div className={styles["filter-bar__filter-list"]}>
            <div className={`${styles["filter-label"]}`}>
              Filters
              <span>
                <IconComponent icon={HandPointing} size={"20px"} />
              </span>
            </div>
            <div>
              <CheckboxDropdown title="Status" items={props.statusFilterItems} onChange={onStatusFilterItemsChanged} />
            </div>
            <div>
              <SearchableCheckboxDropdown
                searchPlaceholder="Merk zoeken"
                deleteFilterLabel="Verwijder merk filters"
                title="Categorieen"
                showFilterName="winkels"
                items={props.categoryFilterItems}
                onChange={onCategoryFilterItemsChanged}
              />
            </div>
            <div>
              <SearchableCheckboxDropdown
                searchPlaceholder="Merk zoeken"
                deleteFilterLabel="Verwijder merk filters"
                title="Merk"
                showFilterName="merken"
                items={props.brandFilterItems}
                onChange={onBrandFilterItemsChanged}
              />
            </div>
            {getTotalNumberOfFilters() > 0 && (
              <div style={{ marginLeft: "20px" }}>
                <span role="link" onClick={() => props.clearFilters()} style={{ color: "red", cursor: "pointer" }}>
                  Verwijder alle filters
                </span>
              </div>
            )}
          </div>

          <div className={styles["filter-bar__sort"]}>
            <div className={styles["filter__sort-item"]}>
              <span className={styles["amount-of-shops"]}>
                <IconComponent icon={StoreIcon} size={"20px"} />
              </span>
              {props.totalResults} winkels
            </div>
            <div className={styles["filter__sort-item"]}>
              Sorteer op:
              <span role={"button"} className={styles["filter__sort-change"]}>
                {/* {orderBy} */}
                <SelectComponent options={sortByOptions} onSelect={setSort} />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <StoresMobileFilterBarComponent
          brandFilterItems={props.brandFilterItems}
          categoryFilterItems={props.categoryFilterItems}
          sortBy={props.sortBy}
          sortByOptions={sortByOptions}
          statusFilterItems={props.statusFilterItems}
          onFiltersChanged={mobileFiltersChanged}
        />
      )}
    </div>
  );
};

export { FilterBar };
