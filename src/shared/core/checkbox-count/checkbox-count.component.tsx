import * as React from "react";

import styles from "./checkbox-count-component.module.scss";
import { CheckboxComponent } from "../checkbox";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { useRef } from "react";

export interface ICheckboxCountProps {
  item: FilterItem;
  onChecked: (id: string) => void;
}

const CheckboxCount = (props: ICheckboxCountProps) => {
  const checkboxRef = useRef<HTMLDivElement>(null);

  const onCheckedOutside = (event: any, id: string) => {
    // Neccesary to make sure the click event isn't used multiple times.
    if (checkboxRef.current && checkboxRef.current.contains(event.target)) {
      return;
    }

    if (props.onChecked && id) {
      props.onChecked(id);
    }
  };

  const onChecked = (id: string) => {
    if (props.onChecked && id) {
      props.onChecked(id);
    }
  };

  return (
    <div
      role="button"
      id="outsideDiv"
      onClick={e => onCheckedOutside(e, props.item.id)}
      className={styles["filter-bar"]}
    >
      <CheckboxComponent onClick={() => onChecked(props.item.id)} isChecked={props.item.isSelected} ref={checkboxRef}>
        {props.item.displayName}
      </CheckboxComponent>
      <span className={styles["counter"]}>{props.item.totalAmount}</span>
    </div>
  );
};

export { CheckboxCount };
