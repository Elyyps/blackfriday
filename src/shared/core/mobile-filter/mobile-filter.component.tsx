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

export interface IMobileFilterComponentProps {
  filterItems: IMobileFilterItem[];
  onClear: () => void;
  onFinish: (selectedItems: IMobileFilterSelectedItems[]) => void;
  totalStores: number;
}

interface IMobileFilterSelectedItems {
  selectedItems: string[];
  title: string;
}

const component = (props: IMobileFilterComponentProps & InjectedIntlProps) => {
  const [currentFilterItem, setCurrentFilterItem] = useState<IMobileFilterItem | undefined>(undefined);
  const [currentFilterItems, setCurrentFilterItems] = useState<IMobileFilterItem[]>([]);
  const { filterItems, onClear, totalStores } = props;
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);

  const onFinishHandler = () => {
    const selectedItems: IMobileFilterSelectedItems[] = filterItems.map(item => ({
      title: item.title,
      selectedItems: item.selectedItems
    }));
    props.onFinish(selectedItems);
  };

  const setSelectedItems = (filterItem: IMobileFilterItem, items: string[]) => {
    if (currentFilterItems && currentFilterItem) {
      currentFilterItems.forEach(item => {
        if (item.title === filterItem.title) {
          item.selectedItems = items;
        }
      });
      setCurrentFilterItems(currentFilterItems);
    }
  };

  React.useEffect(() => {
    setCurrentFilterItems(filterItems);
  }, [filterItems]);

  React.useEffect(() => {
    if (isFilterOpened) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflowY = "scroll";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isFilterOpened]);

  return !isFilterOpened ? (
    <div
      role="button"
      onClick={() => {
        setIsFilterOpened(true);
      }}
      className={styles["filter-bar"]}
    >
      Filter
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
        </div>
      ) : (
        <div className={styles["mobile-filter__header"]}>
          <span
            style={{ cursor: "pointer" }}
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
          <a role="button" onClick={onClear} className={styles["mobile-filter__header__clear"]}>
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
          title={props.intl.formatMessage({ id: "mobile-filter-button" }, { totalStores })}
        />
      </div>
    </div>
  );
};

const MobileFilterComponent = injectIntl(component);
export { MobileFilterComponent };
