import React from "react";
import style from "./checkbox-component.module.scss";
import { Checkbox } from "@app/api/core/checkbox";
import { bannerProps } from "@app/api/core/banner";

export interface ICheckboxComponentProps {
  isChecked?: boolean;
  label?: string;
  onClick?: (value: string) => void;
  title: string;
}

const CheckboxComponent = ({ title, label, isChecked, onClick }: ICheckboxComponentProps) => {
  const [internalIsChecked, setInternalIsChecked] = React.useState(false);
  React.useEffect(() => {
    if (isChecked) setInternalIsChecked(isChecked);
  }, [isChecked]);

  return (
    <React.Fragment>
      <div className={style["checkbox"]}>
        <label className={style["checkbox__label"]}>
          <input
            onClick={() => {
              if (onClick) {
                onClick(title);
              }
              setInternalIsChecked(!internalIsChecked);
            }}
            checked={internalIsChecked}
            type="checkbox"
            className={style["checkbox__input"]}
            aria-checked="false"
          />
          {title}
        </label>
        <span className={style["checkbox__count-item"]}>{label}</span>
      </div>
    </React.Fragment>
  );
};

export { CheckboxComponent };
