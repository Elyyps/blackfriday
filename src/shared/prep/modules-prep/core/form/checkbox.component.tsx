import * as React from "react";
import "./form.component.scss";

interface ICheckboxProps {
  key: string;
  label: string;
}

const Checkbox = (props: ICheckboxProps) => {
  const { label, key } = props;

  return (
    <React.Fragment>
      <label htmlFor={key} className={"checkbox-label"}>
        <input
          type="checkbox"
          className={"checkbox"}
          aria-checked="false"
          id={key}
        />
        {label}
      </label>
    </React.Fragment>
  );
};

export { Checkbox };
