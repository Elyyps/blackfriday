import React, { useState } from "react";
import styles from "./mobile-filter-component.module.scss";
import { ArrowPanelComponent } from "../arrow-panel";
import { IconComponent } from "../icon";
import HandPointing from "@assets/icons/hand-pointing.svg";
import ChevronLeft from "@assets/icons/chevron-left.svg";
import Cross from "@assets/icons/cross.svg";
import { Button } from "../button";
import { GenericPageFilterComponent } from "./pages/generic-page-filter";
import { IMobileFilterItem } from "./mobile-filter-item";
import { SingleFilterComponent } from "./pages/single-page-filter";

export interface IMobileFilterComponentProps {
  filterItems: IMobileFilterItem[];
  onClear: () => void;
  onClose: () => void;
  totalStores: number;
}

const MobileFilterComponent = (props: IMobileFilterComponentProps) => {
  const initialTitle = "Filters";
  const [currentFilterItem, setCurrentFilterItem] = useState<IMobileFilterItem | undefined>(undefined);
  const [currentFilterItems, setCurrentFilterItems] = useState<IMobileFilterItem[]>([]);
  const { filterItems, onClear, totalStores } = props;

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

  const onClearHandler = () => {
    onClear();
    const newItems: IMobileFilterItem[] = [];
    filterItems.forEach(item => {
      item.selectedItems = [];
      newItems.push(item);
    });
    setCurrentFilterItems(newItems);
  };
  React.useEffect(() => {
    setCurrentFilterItems(filterItems);
  }, [filterItems]);

  return (
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
            <IconComponent strokeColor="#fff" icon={ChevronLeft} size={"12spx"} />
          </span>
          <span className={styles["mobile-filter__header__title"]}>
            <span>{currentFilterItem.title}</span>
          </span>
        </div>
      ) : (
        <div className={styles["mobile-filter__header"]}>
          <span
            role="button"
            className={styles["mobile-filter__header__nav-button"]}
            onClick={() => {
              setCurrentFilterItem(undefined);
            }}
          >
            <IconComponent strokeColor="#fff" icon={Cross} size={"12px"} />
          </span>

          <div className={styles["mobile-filter__header__title"]}>
            <span>{initialTitle}</span>
            <IconComponent icon={HandPointing} size={"16px"} />
          </div>
          <a
            role="button"
            onClick={() => {
              onClearHandler();
            }}
            className={styles["mobile-filter__header__clear"]}
          >
            Wis alle filters
          </a>
        </div>
      )}

      {!currentFilterItem ? (
        currentFilterItems.map((item, key) => (
          <ArrowPanelComponent
            key={key}
            brands={item.selectedItems}
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
              filterItem={currentFilterItem}
            />
          )}
        </div>
      )}
      <div className={styles["mobile-filter__footer"]}>
        <Button variant="secondary-inverted" fullWidth title={`Toon ${totalStores} Winkels`} />
      </div>
    </div>
  );
};

export { MobileFilterComponent };
