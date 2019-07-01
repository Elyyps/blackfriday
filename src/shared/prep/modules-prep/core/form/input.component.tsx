import * as React from "react";
import "./form.component.scss";
import classNames from "classnames";
import { IconComponent } from "@app/prep/modules-prep/core";

interface IInputProps {
  classModify?: string;
  icon?: string;
  onChange: (item: string) => void;
  placeholder?: string;
}

const Input = (props: IInputProps) => {
  const { placeholder, classModify, icon } = props;
  const inputClassName = classNames("input", {
    [`input--${classModify}`]: classModify
  });

  return (
    <React.Fragment>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder={placeholder}
          className={inputClassName}
          onChange={(event): void => {
            props.onChange(event.currentTarget.value);
          }}
        />
        {icon ? <IconComponent icon={icon} size={"15px"} /> : ""}
      </div>
    </React.Fragment>
  );
};

export { Input };
