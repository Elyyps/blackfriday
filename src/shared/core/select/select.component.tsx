import * as React from "react";
import styles from "./select-component.module.scss";
import ArrowLongDown from "@assets/icons/arrow-long-down.svg";
import { IconComponent } from "../icon";

export interface ISelectComponentProps {
  icon?: string;
  iconSize?: string;
  onSelect: (value: string) => void;
  options: string[];
}

const SelectComponent = (props: ISelectComponentProps) => {
  const handelChange = (event: any) => {
    const newValue = event.target.value;
    props.onSelect(newValue);
  };

  return (
    <div className={styles["select"]}>
      <select className={styles["select-title"]} onChange={handelChange} onSelect={() => props.onSelect}>
        {props.options.map(value => (
          <option aria-selected value={value}>
            {value}
          </option>
        ))}
      </select>
      <span className={` ${styles["select-icon"]} `}>
        <IconComponent icon={props.icon || ArrowLongDown} size={props.iconSize || "12px"} />
      </span>
    </div>
  );
};

export { SelectComponent };
