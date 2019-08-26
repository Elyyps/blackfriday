import * as React from "react";
import styles from "./search-input-field-component.module.scss";
import SearchIcon from "@assets/icons/search.svg";
import CrossIcon from "@assets/icons/cross.svg";
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
      aria-label="Search input"
      value={value}
      placeholder={placeholder}
      onChange={event => {
        if (onChange) onChange(event.currentTarget.value);
      }}
    />
    <div
      onClick={() => {
        if (onChange) onChange("");
      }}
      role="button"
      style={{ opacity: value && value.length > 0 ? 1 : 0 }}
      className={styles["search-input-field__clear-icon"]}
    >
      <IconComponent size="14px" icon={CrossIcon} fillColor="#777" />
    </div>
  </div>
);

export { SearchInputFieldComponent };
