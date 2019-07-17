import React from "react";
import styles from "./mobile-filter-pages.module.scss";

import { IMobileFilterCheckBox } from "../mobile-filter-check-box";
import { CheckboxComponent } from "@app/core/checkbox/checkbox.component";
import { IMobileFilterItem } from "../mobile-filter-item";
import CheckIcon from "@assets/icons/check.svg";
import { IconComponent } from "@app/core/icon";

export interface ISingleFilterComponentProps {
  hideSearchBar?: boolean;
  items: string[];
  selectedItem: string;
  setCheckedItem: (item: string) => void;
}

const SingleFilterComponent = (props: ISingleFilterComponentProps) => {
  const { items, selectedItem, hideSearchBar, setCheckedItem } = props;

  return (
    <div className={styles["mobile-filter-pages__list"]}>
      {!hideSearchBar && (
        <div className={styles["mobile-filter-pages__list__header"]}>
          <></>
        </div>
      )}
      {items.map((item: any, key: number) => (
        <div
          role="button"
          onClick={() => {
            if (item === selectedItem) setCheckedItem('');
            else setCheckedItem(item);
          }}
          key={key}
          className={styles["mobile-filter-pages__list__item"]}
        >
          {item === selectedItem && (
            <div className={styles["mobile-filter-pages__list__item__check"]}>
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
