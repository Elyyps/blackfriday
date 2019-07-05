import React from "react";
import style from "./checkbox-component.module.scss";
import { Checkbox } from "@app/api/core/checkbox";

export interface ICheckboxComponentProps {
  children: any;
  onClick: (value: string) => void;
}

const CheckboxComponent = (props: ICheckboxComponentProps) => (
  <React.Fragment>
    <div className={style["checkbox"]}>
      <label className={style["checkbox__label"]}>
        <input
          type="checkbox"
          className={style["checkbox__input"]}
          aria-checked={"false"}
          onChange={() => props.onClick(props.children)}
        />
        {props.children}
      </label>
    </div>
  </React.Fragment>
);
export { CheckboxComponent };
