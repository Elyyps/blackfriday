import React from "react";
import styles from "./filter-bar-deals-component.module.scss";
import HandPointing from "@assets/icons/hand-pointing.svg";
import DealIcon from "@assets/icons/medal.svg";
import { IconComponent } from "@app/core";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { SearchableCheckboxDropdown } from "../searchable-checkbox-dropdown/searchable-checkbox-dropdown.component";
import { SelectComponent } from "../select";
import { FilterBarDealsContainerProps } from "./container";
import { ViewType } from "@app/stores/settings";
import { DealsMobileFilterBarComponent } from "./mobile-filter-bar.component";
import { injectIntl, InjectedIntlProps } from "react-intl";

export interface IFilterBarDealsProps {
  filtersChanged: () => void;
}

const component = (props: IFilterBarDealsProps & FilterBarDealsContainerProps & InjectedIntlProps) => {
  const onStoreFilterItemsChanged = (items: FilterItem[]) => {
    if (getNumberOfSelectedfilters(items) !== getNumberOfSelectedfilters(props.storeFilterItems)) {
      props.setStoreFilters([...items]);
      props.filtersChanged();
    }
  };

  const onCategoryFilterItemsChanged = (items: FilterItem[]) => {
    if (getNumberOfSelectedfilters(items) !== getNumberOfSelectedfilters(props.categoryFilterItems)) {
      props.setCategoryFilters([...items]);
      props.filtersChanged();
    }
  };

  const onBrandFilterItemsChanged = (items: FilterItem[]) => {
    if (getNumberOfSelectedfilters(items) !== getNumberOfSelectedfilters(props.brandFilterItems)) {
      props.setBrandFilters([...items]);
      props.filtersChanged();
    }
  };

  const setSort = (sortByString: string) => {
    props.setSortBy(sortByString);
  };

  const sortByOptions = ["Relevatie", "Nieuwste", "Populair", "Deals A - Z", "Deals Z - A"];

  const getTotalNumberOfFilters = (): number =>
    props.storeFilterItems.filter(item => item.isSelected).length +
    props.categoryFilterItems.filter(item => item.isSelected).length +
    props.brandFilterItems.filter(item => item.isSelected).length;

  const mobileFiltersChanged = (
    brandFilterItems: FilterItem[],
    categoryFilterItems: FilterItem[],
    storeFilterItem: FilterItem[],
    sortBy: string
  ) => {
    props.setBrandFilters([...brandFilterItems]);
    props.setCategoryFilters([...categoryFilterItems]);
    props.setStoreFilters([...storeFilterItem]);
    props.setSortBy(sortBy);
  };

  const getNumberOfSelectedfilters = (filterItems: FilterItem[]) => filterItems.filter(item => item.isSelected).length;

  return (
    <div className={styles["filter-bar"]}>
      {props.screenSize && props.screenSize.viewType > ViewType.Tablet ? (
        <div className={`${styles["filter-bar__filter-container"]} ${"uk-container"}`}>
          <div className={`${styles["filter-bar__filter-list"]}`}>
            <div className={`${styles["filter-label"]}`}>
              {props.intl.formatMessage({ id: "filter-bar-label" })}
              <span>
                <IconComponent icon={HandPointing} size={"20px"} />
              </span>
            </div>

            <div>
              <SearchableCheckboxDropdown
                searchPlaceholder={props.intl.formatMessage(
                  { id: "filter-bar-search-placeholder" },
                  {
                    title: props.intl.formatMessage({ id: "deals-filter-bar-stores-filter-title" })
                  }
                )}
                deleteFilterLabel={props.intl.formatMessage(
                  { id: "filter-control-clear" },
                  {
                    title: props.intl.formatMessage({ id: "deals-filter-bar-stores-filter-title" })
                  }
                )}
                title={props.intl.formatMessage({ id: "deals-filter-bar-stores-filter-title" })}
                showFilterName={props.intl.formatMessage({ id: "deals-filter-bar-stores-filter-title" })}
                items={[...props.storeFilterItems.map(item => ({ ...item }))]}
                onChange={onStoreFilterItemsChanged}
              />
            </div>
            <div>
              <SearchableCheckboxDropdown
                searchPlaceholder={props.intl.formatMessage(
                  { id: "filter-bar-search-placeholder" },
                  {
                    title: props.intl.formatMessage({ id: "deals-filter-bar-brands-filter-title" })
                  }
                )}
                deleteFilterLabel={props.intl.formatMessage(
                  { id: "filter-control-clear" },
                  { title: props.intl.formatMessage({ id: "deals-filter-bar-brands-filter-title" }) }
                )}
                title={props.intl.formatMessage({ id: "deals-filter-bar-brands-filter-title" })}
                showFilterName={props.intl.formatMessage({ id: "deals-filter-bar-brands-filter-title" })}
                items={[...props.brandFilterItems.map(item => ({ ...item }))]}
                onChange={onBrandFilterItemsChanged}
              />
            </div>
            <div>
              <SearchableCheckboxDropdown
                searchPlaceholder={props.intl.formatMessage(
                  { id: "filter-bar-search-placeholder" },
                  {
                    title: props.intl.formatMessage({ id: "deals-filter-bar-category-filter-title" })
                  }
                )}
                deleteFilterLabel={props.intl.formatMessage(
                  { id: "filter-control-clear" },
                  {
                    title: props.intl.formatMessage({ id: "deals-filter-bar-category-filter-title" })
                  }
                )}
                title={props.intl.formatMessage({ id: "deals-filter-bar-category-filter-title" })}
                showFilterName={props.intl.formatMessage({ id: "deals-filter-bar-category-filter-title" })}
                items={[...props.categoryFilterItems.map(item => ({ ...item }))]}
                onChange={onCategoryFilterItemsChanged}
              />
            </div>
            {getTotalNumberOfFilters() > 0 && (
              <div className={styles["filter-bar__clear-filter"]}>
                <span
                  role="link"
                  onClick={() => {
                    props.clearFilters();
                    props.filtersChanged();
                  }}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  {props.intl.formatMessage({ id: "filter-bar-clear-filters" })}({getTotalNumberOfFilters()})
                </span>
              </div>
            )}
          </div>

          <div className={styles["filter-bar__sort"]}>
            <div className={styles["filter__sort-filter"]}>
              <span className={styles["amount-of-shops"]}>
                <IconComponent icon={DealIcon} size={"20px"} />
              </span>
              {props.totalResults} {props.intl.formatMessage({ id: "tab-winkels" })}
            </div>
            <div className={styles["filter__sort-item"]}>
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
        <DealsMobileFilterBarComponent
          brandFilterItems={props.brandFilterItems}
          categoryFilterItems={props.categoryFilterItems}
          sortBy={props.sortBy}
          sortByOptions={sortByOptions}
          storeFilterItems={props.storeFilterItems}
          onFiltersChanged={mobileFiltersChanged}
        />
      )}
    </div>
  );
};
const FilterBarDeals = injectIntl(component);
export { FilterBarDeals };
