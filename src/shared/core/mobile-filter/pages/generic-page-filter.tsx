import React from "react";
import styles from "./mobile-filter-pages.module.scss";

import { IMobileFilterCheckBox } from "../mobile-filter-check-box";
import { CheckboxComponent } from "@app/core/checkbox/checkbox.component";
import { IMobileFilterItem } from "../mobile-filter-item";

export interface IGenericPageFilterComponentProps {
  filterItem: IMobileFilterItem;
  hideSearchBar?: boolean;
  setCheckedItems: (items: string[]) => void;
}

const GenericPageFilterComponent = (props: IGenericPageFilterComponentProps) => {
  const { filterItem, setCheckedItems, hideSearchBar } = props;
  const [items, setItems] = React.useState<IMobileFilterCheckBox[]>([]);
  const [internalCheckedItems, setInternalCheckedItems] = React.useState<string[]>([]);

  const initializeItems = () => {
    const initializedItems: IMobileFilterCheckBox[] = filterItem.items.map(item => ({
      title: item,
      checked: filterItem.selectedItems.findIndex(checkedItem => checkedItem === item) >= 0
    }));
    setItems(initializedItems);
  };
  React.useEffect(() => {
    initializeItems();
  }, []);
  const setNewCheckedItems = () => {
    const newCheckedItems = items.filter(item => item.checked).map(item => item.title);

    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxClick = (title: string) => {
    const newItems: IMobileFilterCheckBox[] = [];
    items.forEach(item => {
      if (item.title === title) {
        item.checked = item.checked ? false : true;
      }
      newItems.push(item);
    });
    setItems(newItems);
    setNewCheckedItems();
  };

  return (
    <div className={styles["mobile-filter-pages__list"]}>
      {!hideSearchBar && (
        <div className={styles["mobile-filter-pages__list__header"]}>
          {filterItem.selectedItems.map(item => item + ",")}
        </div>
      )}
      {items.map((item: IMobileFilterCheckBox, key: number) => (
        <div role="button" key={key} className={styles["mobile-filter-pages__list__item"]}>
          <CheckboxComponent
            onClick={() => {
              handleCheckboxClick(item.title);
            }}
            isChecked={item.checked}
          >
            {item.title}
          </CheckboxComponent>
        </div>
      ))}
    </div>
  );
};

export { GenericPageFilterComponent };
