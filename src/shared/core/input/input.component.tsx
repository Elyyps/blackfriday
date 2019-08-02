import React from "react";
import styles from "./input-component.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";

interface IInputProps {
  icon?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
}

const Input = (props: IInputProps) => {
  const { name, placeholder, value, icon } = props;

  const handelChange = (event: any) => {
    {
      const newValue = event.target.value;
      props.onChange(newValue);
    }
  };

  return (
    <div className={styles["input-component"]}>
      <input
        onChange={handelChange}
        type="text"
        placeholder={placeholder}
        className={styles["textbox-component"]}
        name={name}
        value={value}
      />
      {!!icon && (
        <div className={styles["input-icon"]}>
          <IconComponent icon={icon} size={"15px"} />
        </div>
      )}
    </div>
  );
};

export { Input };
