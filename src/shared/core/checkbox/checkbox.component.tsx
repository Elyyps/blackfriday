import React from "react";
import style from "./checkbox-component.module.scss";
import { Checkbox } from "@app/api/core/checkbox";

export interface ICheckboxComponentProps {
  children: any;
  isChecked?: boolean;
  onClick: (value: string) => void;
}

const CheckboxComponent = (props: ICheckboxComponentProps) => (
  <React.Fragment>
    <div className={style["checkbox"]}>
      <label className={style["checkbox__label"]}>
        <input
          type="checkbox"
          className={style["checkbox__input"]}
          onChange={() => props.onClick(props.children)}
          checked={props.isChecked}
        />

        {props.children}
      </label>
    </div>
  </React.Fragment>
);
export { CheckboxComponent };
