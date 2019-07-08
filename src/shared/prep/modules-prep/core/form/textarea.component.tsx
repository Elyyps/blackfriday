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
  name: string;
  placeholder?: string;
}

const TextArea = (props: IInputProps) => {
  const { name, placeholder, classModify, icon, label, isError, isSuccess } = props;
  const inputClassName = classNames("textarea", {
    [`textarea--${classModify}`]: classModify
  });
  const [value, setValue] = useState("");
  const wrapperClassnames = classNames({
    ["error"]: isError,
    ["isIcon"]: icon,
    ["success"]: isSuccess
  });
  const handelChange = (event: any) => {
    {
      setValue(event.target.value);
    }
  };

  const handelClear = () => {
    setValue("");
  };

  return (
    <React.Fragment>
      <div className={`form-item ${wrapperClassnames}`}>
        {label ? <label htmlFor="label">{label}</label> : ""}
        <textarea
          onChange={handelChange}
          placeholder={placeholder}
          className={inputClassName}
          name={name}
          value={value}
        />
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

export { TextArea };
