import * as React from "react";
import style from "./button-component.module.scss";
import classNames from "classnames";
import { IconComponent } from "@app/core/icon/icon.component";

export type ButtonType =
  | "primary-default"
  | "primary-brand"
  | "primary-inverted"
  | "secondary"
  | "secondary-inverted"
  | "tertiary"
  | "tertiary-inverted";

interface IButtonProps {
  buttonType?: ButtonType;
  classNames?: void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  iconPosition?: string;
  onClick?: () => void;
  size?: number;
  title?: string;
  variant?: string;
}

const Button = (props: IButtonProps) => {
  const { variant, title, buttonType, icon, disabled, iconPosition } = props;
  const classModify = variant || "primary-default";
  const buttonFAB = !title ? style["button--FAB"] : "";
  const buttonClassName = classNames(
    style["button"],
    style[`button--${classModify}`],
    buttonFAB,
    {
      "button--fullWidth": props.fullWidth
    }
  );
  const buttonStyle = {
    width: props.fullWidth ? "100%" : props.size,
    height: props.size
  };

  const renderIconMargin = (margin = "right") => {
    let newMargin = margin;
    if (!title) {
      newMargin = "center";
    }

    return (
      <span className={style[`icon-${newMargin}`]}>
        <IconComponent icon={icon} size="14px" />
      </span>
    );
  };

  return (
    <React.Fragment>
      <button
        disabled={disabled}
        style={buttonStyle}
        type={buttonType}
        name={title}
        className={buttonClassName}
        onClick={
          !disabled && typeof props.onClick !== "undefined"
            ? props.onClick
            : undefined
        }
      >
        <span className={style["icon-svg"]}>
          {((icon && iconPosition === "right") || (icon && !iconPosition)) &&
            title}
          {icon ? renderIconMargin(iconPosition) : title}
          {icon && iconPosition === "left" && title}
        </span>
      </button>
    </React.Fragment>
  );
};

export { Button };
