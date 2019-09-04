import React, { useState } from "react";
import styles from "./mobile-filter-component.module.scss";
import { FilterItemRow } from "@app/core/filter-item-row";
import { IconComponent } from "../icon";
import HandPointing from "@assets/icons/hand-pointing.svg";
import ChevronLeft from "@assets/icons/chevron-left.svg";
import FilterIcon from "@assets/icons/filter.svg";
import Cross from "@assets/icons/cross.svg";
import { Button } from "../button";
import { GenericPageFilterComponent } from "./pages/generic-page-filter";
import { IMobileFilterItem } from "./mobile-filter-item";
import { SingleFilterComponent } from "./pages/single-page-filter";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { MobileFilterContainerProps } from "./containers/mobile-filter-container";
import { FilterItem } from "@app/api/core/filter/filter-item";

export interface IMobileFilterComponentProps {
  filterItems: IMobileFilterItem[];
  onClear: () => void;
  onFilterChange: (items: IMobileFilterItem[]) => void;
  onFinish: (selectedItems: IMobileFilterSelectedItems[]) => void;
  totalStores: number;
}

export interface IMobileFilterSelectedItems {
  selectedItems: string[];
  title: string;
}

const component = (props: IMobileFilterComponentProps & InjectedIntlProps & MobileFilterContainerProps) => {
  const [currentFilterItem, setCurrentFilterItem] = useState<IMobileFilterItem | undefined>(undefined);
  const [currentFilterItems, setCurrentFilterItems] = useState<IMobileFilterItem[]>([]);
  const { filterItems, onClear } = props;
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);

  const scrollAddition = 0.01;

  const onFinishHandler = () => {
    const selectedItems: IMobileFilterSelectedItems[] = filterItems.map(item => ({
      title: item.title,
      selectedItems: item.selectedItems
    }));
    props.onFinish(selectedItems);
    setIsFilterOpened(false);
  };

  const getNumberOfSelectedfilters = (filterItems: IMobileFilterItem) => filterItems.items.filter(item => item).length;
  const setSelectedItems = (filterItem: IMobileFilterItem, items: string[]) => {
    if (currentFilterItems && currentFilterItem) {
      currentFilterItems.forEach(item => {
        if (item.title === filterItem.title) {
          item.selectedItems = items;
        }
      });

      setCurrentFilterItems(currentFilterItems);
    }
    props.onFilterChange(currentFilterItems);
  };

  const onClearHandler = () => {
    if (currentFilterItem) {
      const newItem: IMobileFilterItem = {
        title: currentFilterItem.title,
        items: currentFilterItem.items,
        selectedItems: [],
        searchBarPlaceholder: currentFilterItem.searchBarPlaceholder,
        hasSearchBar: currentFilterItem.hasSearchBar
      };
      setCurrentFilterItem(newItem);
      setSelectedItems(currentFilterItem, []);
    } else {
      onClear();
    }
  };
  React.useEffect(() => {
    setCurrentFilterItems(filterItems);
  }, [filterItems]);

  const enableScroll = () => {
    document.documentElement.style.overflow = "unset";
    document.body.style.overflow = "unset";
    document.body.style.position = "relative";
  };
  const disableScroll = () => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
  };

  const checkScroll = () => {
    const mobileBreakpoint = 769;
    if (props.screenSize && isFilterOpened) {
      if (props.screenSize.breakpointPixels < mobileBreakpoint) {
        disableScroll();
      } else {
        enableScroll();
      }
    }
  };

  React.useEffect(() => {
    checkScroll();

    return () => {
      enableScroll();
    };
  }, [isFilterOpened]);

  React.useEffect(() => {
    checkScroll();
  }, [props.screenSize]);

  React.useEffect(() => {
    checkScroll();
    const vh = window.innerHeight * scrollAddition;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    return () => {
      enableScroll();
    };
  }, []);

  return (
    <div className={"uk-container"}>
      {!isFilterOpened ? (
        <div
          role="button"
          onClick={() => {
            setIsFilterOpened(true);
          }}
          className={styles["filter-bar"]}
        >
          {props.intl.formatMessage({ id: "filter-bar-label" })}
          <IconComponent icon={FilterIcon} size={"15px"} />
        </div>
      ) : (
        <div className={styles["mobile-filter"]}>
          {currentFilterItem ? (
            <div className={styles["mobile-filter__header"]}>
              <span
                role="button"
                className={styles["mobile-filter__header__nav-button"]}
                onClick={() => {
                  setCurrentFilterItem(undefined);
                }}
              >
                <IconComponent strokeColor="#fff" icon={ChevronLeft} size={"12px"} />
              </span>
              <span className={styles["mobile-filter__header__title"]}>
                <span>{currentFilterItem.title}</span>
              </span>
              {!currentFilterItem.isSingleSelection && (
                <a role="button" onClick={onClearHandler} className={styles["mobile-filter__header__clear"]}>
                  {props.intl.formatMessage({ id: "mobile-filter-clear-filter" })}
                </a>
              )}
            </div>
          ) : (
            <div className={styles["mobile-filter__header"]}>
              <span
                role="button"
                className={styles["mobile-filter__header__nav-button"]}
                onClick={() => {
                  setIsFilterOpened(false);
                }}
              >
                <IconComponent strokeColor="#fff" icon={Cross} size={"12px"} />
              </span>

              <div className={styles["mobile-filter__header__title"]}>
                <span>{props.intl.formatMessage({ id: "mobile-filter-title" })}</span>
                <IconComponent icon={HandPointing} size={"16px"} />
              </div>
              <a
                role="button"
                onClick={() => {
                  onClear();
                }}
                className={styles["mobile-filter__header__clear"]}
              >
                {props.intl.formatMessage({ id: "mobile-filter-clear-filter" })}
              </a>
            </div>
          )}

          {!currentFilterItem ? (
            currentFilterItems.map((item, key) => (
              <FilterItemRow
                key={key}
                items={item.selectedItems}
                onClick={() => {
                  setCurrentFilterItem(item);
                }}
                title={item.title}
              />
            ))
          ) : (
            <div className={styles["mobile-filter__list"]}>
              {currentFilterItem.isSingleSelection ? (
                <SingleFilterComponent
                  hideSearchBar={!currentFilterItem.hasSearchBar}
                  items={currentFilterItem.items}
                  selectedItem={currentFilterItem.selectedItems[0]}
                  placeholder={currentFilterItem.searchBarPlaceholder}
                  setCheckedItem={(selectedItem: string) => {
                    const selectedItemArray = [];
                    selectedItemArray.push(selectedItem);
                    setSelectedItems(currentFilterItem, selectedItemArray);
                    setCurrentFilterItem(undefined);
                  }}
                />
              ) : (
                <GenericPageFilterComponent
                  hideSearchBar={!currentFilterItem.hasSearchBar}
                  setCheckedItems={(selectedItems: string[]) => {
                    setSelectedItems(currentFilterItem, selectedItems);
                  }}
                  placeholder={currentFilterItem.searchBarPlaceholder}
                  filterItem={currentFilterItem}
                />
              )}
            </div>
          )}
          <div className={styles["mobile-filter__footer"]}>
            <Button
              variant="primary-brand"
              fullWidth
              onClick={onFinishHandler}
              title={props.intl.formatMessage({ id: "mobile-filter-button" }) + " " + props.totalStores}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const MobileFilterComponent = injectIntl(component);
export { MobileFilterComponent };
