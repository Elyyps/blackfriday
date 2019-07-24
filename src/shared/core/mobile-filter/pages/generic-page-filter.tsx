import React from "react";
import styles from "./mobile-filter-pages.module.scss";
import { IMobileFilterCheckBox } from "../mobile-filter-check-box";
import { CheckboxComponent } from "@app/core/checkbox/checkbox.component";
import { IMobileFilterItem } from "../mobile-filter-item";
import { SearchInputFieldComponent } from "@app/core/search-input-field";

export interface IGenericPageFilterComponentProps {
  filterItem: IMobileFilterItem;
  hideSearchBar?: boolean;
  placeholder?: string;
  setCheckedItems: (items: string[]) => void;
}

const GenericPageFilterComponent = (props: IGenericPageFilterComponentProps) => {
  const { filterItem, setCheckedItems, hideSearchBar, placeholder } = props;
  const [items, setItems] = React.useState<IMobileFilterCheckBox[]>([]);
  const [filteredItems, setFilteredItems] = React.useState<IMobileFilterCheckBox[]>([]);
  const [currentFilter, setCurrentFilter] = React.useState<string>("");

  const initializeItems = () => {
    const initializedItems: IMobileFilterCheckBox[] = filterItem.items.map(item => ({
      title: item,
      checked: filterItem.selectedItems.findIndex(checkedItem => checkedItem === item) >= 0
    }));
    setItems(initializedItems);
    setFilteredItems(initializedItems);
  };
  React.useEffect(() => {
    initializeItems();
    setCurrentFilter("");
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

  const filterByText = (text: string) => {
    const textUpperCase = text.toUpperCase();
    const newFilteredItems: IMobileFilterCheckBox[] = items.filter(item =>
      item.title.toUpperCase().includes(textUpperCase)
    );
    setFilteredItems(newFilteredItems);
    setCurrentFilter(text);
  };

  return (
    <div className={styles["mobile-filter-pages__list"]}>
      {!hideSearchBar && (
        <SearchInputFieldComponent
          value={currentFilter}
          onChange={value => {
            filterByText(value);
          }}
          placeholder={placeholder}
        />
      )}
      {filteredItems.map((item: IMobileFilterCheckBox, key: number) => (
        <div
          onClick={() => {
            handleCheckboxClick(item.title);
          }}
          role="button"
          key={key}
          className={styles["mobile-filter-pages__list__item"]}
        >
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
