import React from "react";
import styles from "./mobile-filter-pages.module.scss";
import CheckIcon from "@assets/icons/check.svg";
import { IconComponent } from "@app/core/icon";
import { SearchInputFieldComponent } from "@app/core/search-input-field";

const DEFAULT_PADDING = 16;
export interface ISingleFilterComponentProps {
  hideSearchBar?: boolean;
  items: string[];
  placeholder?: string;
  selectedItem: string;
  setCheckedItem: (item: string) => void;
}

const SingleFilterComponent = (props: ISingleFilterComponentProps) => {
  const { items, placeholder, selectedItem, hideSearchBar, setCheckedItem } = props;
  const [currentFilter, setCurrentFilter] = React.useState<string>("");
  const [filteredItems, setFilteredItems] = React.useState<string[]>([]);

  const filterByText = (text: string) => {
    const textUpperCase = text.toUpperCase();
    const newFilteredItems: string[] = items.filter(item => item.toUpperCase().includes(textUpperCase));
    setFilteredItems(newFilteredItems);
    setCurrentFilter(text);
  };
  React.useEffect(() => {
    setFilteredItems(items);
  }, []);

  return (
    <div style={{ paddingTop: hideSearchBar ? 0 : DEFAULT_PADDING }} className={styles["mobile-filter-pages__list"]}>
      {!hideSearchBar && (
        <SearchInputFieldComponent
          value={currentFilter}
          onChange={value => {
            filterByText(value);
          }}
          placeholder={placeholder}
        />
      )}
      {filteredItems.map((item: string, key: number) => (
        <div
          role="button"
          onClick={() => {
            setCheckedItem(item);
          }}
          key={key}
          className={styles["mobile-filter-pages__list__item"]}
        >
          {item === selectedItem && (
            <div
              role="button"
              onClick={() => {
                setCheckedItem(item);
              }}
              className={styles["mobile-filter-pages__list__item__check"]}
            >
              <IconComponent strokeColor="red" icon={CheckIcon} size={"12px"} />
            </div>
          )}
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export { SingleFilterComponent };
