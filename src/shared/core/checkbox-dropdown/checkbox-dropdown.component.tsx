import * as React from "react";

import styles from "./checkbox-dropdown-component.module.scss";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { CheckboxComponent } from "../checkbox";
import { DropdownComponent } from "../dropdown-new/dropdown.component";

export interface ICheckboxDropDownProps {
  items: FilterItem[];
  onChange?: (items: FilterItem[]) => void;
  title: string;
}

const CheckboxDropDown = (props: ICheckboxDropDownProps) => {
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
        <React.Fragment>
          {props.items.map((item, key) => (
            <li key={key} className={styles["filter-bar-li"]}>
              <CheckboxComponent isChecked={item.isSelected} onClick={onChecked}>
                {item.displayName}
              </CheckboxComponent>
              <span className={styles["counter"]}>{item.totalAmount}</span>
            </li>
          ))}
        </React.Fragment>
      </DropdownComponent>
    </div>
  );
};

export { CheckboxDropDown };
