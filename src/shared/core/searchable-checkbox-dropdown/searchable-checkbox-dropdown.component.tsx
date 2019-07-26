import * as React from "react";

import styles from "./searchable-checkbox-dropdown-component.module.scss";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { CheckboxComponent } from "../checkbox";
import { DropdownComponent } from "../dropdown-new/dropdown.component";
import { ClickableComponent } from "../clickable";
import { Input } from "@app/prep/modules-prep/core";
import Search from "@assets/icons/search.svg";

export interface ISearchableCheckboxDropdownProps {
  items: FilterItem[];
  onChange?: (items: FilterItem[]) => void;
  title: string;
}

const SearchableCheckboxDropdown = (props: ISearchableCheckboxDropdownProps) => {
  const onChecked = (value: any) => {
    const result = props.items.map(item => {
      if (item.displayName === value) {
        item.isSelected = !item.isSelected;
      }

      return item;
    });
    if (props.onChange) {
      props.onChange(result);
    }
  };

  return (
    <div>
      <DropdownComponent title={props.title}>
        <div className={styles["content"]}>
          <div className={styles["dropdown-head"]}>
            <Input placeholder={"Zoeken"} classModify={"large"} icon={Search} name={"search"} />
          </div>
          <div className={styles["dropdown-body"]}>
            <div className="uk-grid uk-child-width-1-2@s">
              {props.items.map((item, key) => (
                <div
                  key={key}
                  role="button"
                  onClick={() => onChecked(item.displayName)}
                  className={styles["filter-bar"]}
                >
                  <CheckboxComponent isChecked={item.isSelected} onClick={onChecked}>
                    {item.displayName}
                  </CheckboxComponent>
                  <span className={styles["counter"]}>{item.totalAmount}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["dropdown-bottom"]}>
            <ul className={styles["dropdown-bottom__action"]}>
              <li>
                <ClickableComponent title="Verwijder merk filters (2)" variant="link-primary" />
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
