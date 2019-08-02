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

  const getTotalNumberOfFilters = (): number =>
    props.statusFilterItems.filter(item => item.isSelected).length +
    props.categoryFilterItems.filter(item => item.isSelected).length +
    props.brandFilterItems.filter(item => item.isSelected).length;

  console.log(props.screenSize);

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

  return (
    <div className={styles["filter-bar"]}>
      {props.screenSize && props.screenSize.viewType > ViewType.Tablet ? (
        <div className={`${styles["filter-bar__filter-container"]} ${"uk-container"}`}>
          <div className={`${styles["filter-bar__filter-list"]}  `}>
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
              <div className={styles["filter-bar__clear-filter"]}>
                <span role="link" onClick={() => props.clearFilters()} style={{ color: "red", cursor: "pointer" }}>
                  Verwijder alle filters({getTotalNumberOfFilters()})
                </span>
              </div>
            )}
          </div>

          <div className={styles["filter-bar__sort"]}>
            <div className={styles["filter__sort-filter"]}>
              <span className={styles["amount-of-shops"]}>
                <IconComponent icon={StoreIcon} size={"20px"} />
              </span>
              {props.totalResults} winkels
            </div>
            <div className={styles["filter__sort-item"]}>
              <span className={styles["filter__sort-text"]}> Sorteer op: </span>

              {/* className={styles["filter__sort-change"]} */}
              {/* {orderBy} */}
              <SelectComponent
                options={["Relevatie", "Nieuwste", "Populair", "Winkels A - Z", "Winkels Z - A"]}
                onSelect={setSort}
              />
            </div>
          </div>
        </div>
      ) : (
        <MobileFilterComponent totalStores={10} onClear={() => {}} filterItems={filterItems} />
      )}
    </div>
  );
};

export { FilterBar };
