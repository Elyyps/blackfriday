import * as React from "react";
import "./form.component.scss";

interface ICheckboxProps {
  isChecked?: any;
  key?: any;
  label?: string;
  name: string;
  onChange?: any;
}

const RadioButton = ({
  name,
  label,
  key,
  onChange,
  isChecked
}: ICheckboxProps) => (
  <React.Fragment>
    <div className="radio-button-wrapper">
      <label htmlFor={key} className={"radio-label"}>
        <input
          checked={isChecked}
          type="radio"
          name={name}
          className={"radio"}
          aria-checked="false"
          id={key}
          onChange={onChange}
        />
        <div className="check">
          <div className="check-label">{label}</div>
        </div>
      </label>
    </div>
  </React.Fragment>
);

export { RadioButton };
