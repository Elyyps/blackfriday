import React, { forwardRef } from "react";
import style from "./checkbox-component.module.scss";

export interface ICheckboxComponentProps {
  children: any;
  isChecked?: boolean;
  onClick?: (event: any, value: any) => void;
}

const CheckboxComponent = forwardRef((props: ICheckboxComponentProps, ref: any) => {
  const onClick = (event: any, value: any) => {
    if (props.onClick) {
      props.onClick(event, value);
    }
  };

  return (
    <React.Fragment>
      <div className={style["checkbox"]} ref={ref}>
        <label className={style["checkbox__label"]}>
          <input
            aria-checked="true"
            type="checkbox"
            role="checkbox"
            className={style["checkbox__input"]}
            onChange={e => onClick(e, props.children)}
            checked={props.isChecked}
          />
          {props.children}
        </label>
      </div>
    </React.Fragment>
  );
});

export { CheckboxComponent };
