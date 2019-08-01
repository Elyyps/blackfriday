import * as React from "react";

import styles from "./searchable-checkbox-dropdown-component.module.scss";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { DropdownComponent } from "../dropdown-new/dropdown.component";
import { ClickableComponent } from "../clickable";
import Search from "@assets/icons/search.svg";
import { CheckboxCount } from "../checkbox-count/checkbox-count.component";
import { Input } from "@app/core/input/input.component";
import { useState, useEffect } from "react";

export interface ISearchableCheckboxDropdownProps {
  deleteFilterLabel: string;
  items: FilterItem[];
  onChange: (items: FilterItem[]) => void;
  searchPlaceholder: string;
  showFilterName: string;
  title: string;
}

const SearchableCheckboxDropdown = (props: ISearchableCheckboxDropdownProps) => {
  const [search, setSearch] = useState<string>("");
  const [internalItems, setInternalItems] = useState<FilterItem[]>(props.items);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    let result = [...props.items];
    if (search) {
      result = result.filter(item => {
        return item.displayName.toLowerCase().includes(search);
      });
    }

    setInternalItems(result);
  }, [props.items, search]);

  useEffect(() => {
    if (!isOpen) {
      props.onChange([...internalItems]);
    }
  }, [isOpen]);

  const onChange = (id: string) => {
    let result = props.items.map(item => {
      if (item.id === id) {
        item.isSelected = !item.isSelected;
      }

      return item;
    });

    result = result.filter(item => {
      return item.displayName.toLowerCase().includes(search);
    });

    setInternalItems([...result]);
  };

  const getFilterCountString = () => {
    const count = props.items.filter(item => item.isSelected).length;
    if (count > 0) {
      return `(${count})`;
    }

    return null;
  };

  const hasSelectedItems = props.items.filter(item => item.isSelected).length > 0;

  const getTotalCount = () => {
    let count = 0;

    if (hasSelectedItems) {
      const selectedItems = props.items.filter(item => item.isSelected);
      selectedItems.map(item => {
        count += item.totalAmount || 0;
      });
    } else {
      props.items.map(item => {
        count += item.totalAmount || 0;
      });
    }

    return count;
  };

  const clearFilters = () => {
    const result = props.items.map(item => {
      if (item.isSelected) {
        item.isSelected = false;
      }

      return item;
    });

    setInternalItems([...result]);
  };

  const persistFilters = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <DropdownComponent title={props.title} hasSelectedItems={hasSelectedItems} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className={styles["content"]}>
          <div className={styles["dropdown-head"]}>
            <Input
              value={search}
              onChange={setSearch}
              placeholder={props.searchPlaceholder}
              icon={Search}
              name={"search"}
            />
          </div>
          <div className={styles["dropdown-body"]}>
            <div className="uk-grid uk-child-width-1-2@s">
              {internalItems.length > 0 ? (
                internalItems.map((item, key) => <CheckboxCount key={key} item={item} onChecked={onChange} />)
              ) : (
                <div>Geen resultaten</div>
              )}
            </div>
          </div>
          <div className={styles["dropdown-bottom"]}>
            <ul className={styles["dropdown-bottom__action"]}>
              <li>
                {getFilterCountString() && (
                  <ClickableComponent
                    title={`${props.deleteFilterLabel} ${!!getFilterCountString() ? getFilterCountString() : ""}`}
                    variant="link-secondary"
                    onClick={clearFilters}
                  />
                )}
              </li>

              <li>
                <ClickableComponent
                  title={`Toon ${getTotalCount()} ${props.showFilterName}`}
                  variant="primary-brand"
                  onClick={() => persistFilters()}
                />
              </li>
            </ul>
          </div>
        </div>
      </DropdownComponent>
    </div>
  );
};

export { SearchableCheckboxDropdown };
