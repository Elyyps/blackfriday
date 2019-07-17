import * as React from "react";
import styles from "./search-input-field-component.module.scss";
import { InputType } from "zlib";
import SearchIcon from "@assets/icons/search.svg";
import { IconComponent } from "../icon";
export interface ISearchInputFieldComponentProps {
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

const SearchInputFieldComponent = ({ value, placeholder, onChange }: ISearchInputFieldComponentProps) => (
  <div className={styles["search-input-field"]}>
    <div className={styles["search-input-field__icon"]}>
      <IconComponent size="14px" icon={SearchIcon} fillColor="#777" />
    </div>
    <input
      value={value}
      placeholder={placeholder}
      onChange={event => {
        if (onChange) onChange(event.currentTarget.value);
      }}
    />
  </div>
);

export { SearchInputFieldComponent };
