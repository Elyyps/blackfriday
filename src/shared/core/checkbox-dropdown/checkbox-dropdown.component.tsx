import * as React from "react";

import styles from "./checkbox-dropdown-component.module.scss";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { CheckboxComponent } from "../checkbox";
import { DropdownComponent } from "../dropdown-new/dropdown.component";

export interface ICheckboxDropdownProps {
  items: FilterItem[];
  onChange?: (items: FilterItem[]) => void;
  title: string;
}

const CheckboxDropdown = (props: ICheckboxDropdownProps) => {
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
          {props.items.map((item, key) => (
            <div key={key} role="button" onClick={() => onChecked(item.displayName)} className={styles["filter-bar"]}>
              <CheckboxComponent isChecked={item.isSelected} onClick={onChecked}>
                {item.displayName}
              </CheckboxComponent>
              <span className={styles["counter"]}>{item.totalAmount}</span>
            </div>
          ))}
        </div>
      </DropdownComponent>
    </div>
  );
};

export { CheckboxDropdown };
