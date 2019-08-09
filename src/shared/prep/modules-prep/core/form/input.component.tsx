import React, { useState } from "react";
import "./form.component.scss";
import classNames from "classnames";
import { IconComponent } from "@app/prep/modules-prep/core";
import Cross from "@assets/icons/cross.svg";
import Check from "@assets/icons/check.svg";

interface IInputProps {
  classModify?: string;
  errorMessage?: string;
  icon?: string;
  isError?: string;
  isSuccess?: boolean;
  label?: string;
  name?: string;
  onChange?: any;
  placeholder?: string;
  value?: string;
}

const Input = (props: IInputProps) => {
  const { name, placeholder, value, classModify, icon, label, isError, isSuccess } = props;
  const inputClassName = classNames("input", {
    [`input--${classModify}`]: classModify
  });
  const [internalValue, setValue] = useState("");
  const wrapperClassnames = classNames({
    ["error"]: isError,
    ["isIcon"]: icon,
    ["success"]: isSuccess
  });
  const handelChange = (event: any) => {
    {
      const newValue = event.target.value;
      setValue(newValue);
      props.onChange(newValue);
    }
  };

  const handelClear = () => {
    setValue("");
  };

  React.useEffect(() => {
    if (value) setValue(value);
  }, [value]);

  return (
    <React.Fragment>
      <div className={`form-item ${wrapperClassnames}`}>
        {label ? <label htmlFor="label">{label}</label> : ""}
        <input
          onChange={handelChange}
          type="text"
          aria-label="Input"
          placeholder={placeholder}
          className={inputClassName}
          name={name}
          value={internalValue}
        />
        {icon ? <IconComponent icon={icon} size={"15px"} /> : ""}
        {value && !isSuccess ? (
          <div role={"button"} className="input-icon" onClick={handelClear}>
            <IconComponent icon={Cross} size={"10px"} />
          </div>
        ) : (
          ""
        )}
        {isSuccess ? (
          <div className="input-icon">
            <IconComponent icon={Check} size={"10px"} />
          </div>
        ) : (
          ""
        )}

        {isError ? <div className="error-message">{isError ? isError : ""}</div> : " "}
      </div>
    </React.Fragment>
  );
};

export { Input };
