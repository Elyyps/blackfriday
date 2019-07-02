import React from "react";
import style from "./checkbox-component.module.scss";
import { Checkbox } from "@app/api/core/checkbox";

export interface ICheckboxComponentProps {
  checkbox: Checkbox;
  onClick: (value: string) => void;
}

const CheckboxComponent = (props: ICheckboxComponentProps) => (
  <React.Fragment>
    <div className={style["checkbox"]}>
      <label className={style["checkbox__label"]}>
        <input
          type="checkbox"
          className={style["checkbox__input"]}
          aria-checked="false"
          onChange={() => props.onClick(props.checkbox.text)}
        />
        {props.checkbox.text}
      </label>
      <span className={style["checkbox__count-item"]}>({props.checkbox.quantity})</span>
    </div>
  </React.Fragment>
);
export { CheckboxComponent };
