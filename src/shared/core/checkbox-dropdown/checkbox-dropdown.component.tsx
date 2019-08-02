import React, { useState } from "react";

import styles from "./checkbox-dropdown-component.module.scss";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { DropdownComponent } from "../dropdown-new/dropdown.component";
import { CheckboxCount } from "../checkbox-count/checkbox-count.component";

export interface ICheckboxDropdownProps {
  items: FilterItem[];
  onChange: (items: FilterItem[]) => void;
  title: string;
}

const CheckboxDropdown = (props: ICheckboxDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChange = (id: string) => {
    const result = props.items.map(item => {
      item.isSelected = item.id === id;

      return item;
    });

    props.onChange([...result]);
  };

  const hasSelectedItems = props.items.filter(item => item.isSelected).length > 0;

  return (
    <DropdownComponent title={props.title} hasSelectedItems={hasSelectedItems} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={styles["content"]}>
        {props.items.map((item, key) => (
          <CheckboxCount key={key} item={item} onChecked={onChange} />
        ))}
      </div>
    </DropdownComponent>
  );
};

export { CheckboxDropdown };
