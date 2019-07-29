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
  items: FilterItem[];
  onChange: (items: FilterItem[]) => void;
  title: string;
  searchPlaceholder: string;
  deleteFilterLabel: string;
}

const SearchableCheckboxDropdown = (props: ISearchableCheckboxDropdownProps) => {
  const [search, setSearch] = useState<string>("");
  const [internalItems, setInternalItems] = useState<FilterItem[]>(props.items);

  useEffect(() => {
    let result = [...props.items];
    if (search) {
      result = result.filter(item => {
        return item.displayName.toLowerCase().includes(search);
      });
    }

    setInternalItems(result);
  }, [props.items, search]);

  const onChange = (id: string) => {
    const result = props.items.map(item => {
      if (item.id === id) {
        if (item.isSelected) {
          item.isSelected = false;
        } else {
          item.isSelected = true;
        }
      }

      return item;
    });

    props.onChange([...result]);
  };

  const getCountString = () => {
    const count = props.items.filter(item => item.isSelected).length;
    if (count > 0) {
      return `(${count})`;
    }
    return null;
  };

  return (
    <div>
      <DropdownComponent title={props.title}>
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
              {internalItems.map((item, key) => (
                <CheckboxCount key={key} item={item} onChecked={onChange} />
              ))}
            </div>
          </div>
          <div className={styles["dropdown-bottom"]}>
            <ul className={styles["dropdown-bottom__action"]}>
              <li>
                <ClickableComponent
                  title={`${props.deleteFilterLabel} ${!!getCountString() ? getCountString() : ""}`}
                  variant="link-secondary"
                  disabled={!getCountString()}
                />
              </li>
              <li>
                <ClickableComponent title={"Toon 123 Winkels"} variant="primary-brand" />
              </li>
            </ul>
          </div>
        </div>
      </DropdownComponent>
    </div>
  );
};

export { SearchableCheckboxDropdown };
