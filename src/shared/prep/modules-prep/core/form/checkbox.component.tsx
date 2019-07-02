import * as React from "react";
import "./form.component.scss";

interface ICheckboxProps {
  buttonText: any;
  isChecked?: any;
  key?: any;
  label?: string;
  name?: any;
  onChange?: any;
}

const Checkbox = ({ name, label, key, onChange, isChecked, buttonText }: ICheckboxProps) => (
  <React.Fragment>
    <label htmlFor={key} className={"checkbox-label"}>
      <input
        data-category={buttonText}
        checked={isChecked}
        type="checkbox"
        name={name}
        className={"checkbox"}
        aria-checked="false"
        id={key}
        onChange={onChange}
      />
      {label}
    </label>
  </React.Fragment>
);

export { Checkbox };
