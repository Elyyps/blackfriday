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

export type IconStyle = "outline" | "filled" | "outline-fill";

interface IButtonProps {
  buttonType?: string;
  classNames?: void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  iconPosition?: string;
  iconStyle?: IconStyle;
  onClick?: () => void;
  size?: number;
  title?: string;
  variant?: ButtonType;
}

const Button = (props: IButtonProps) => {
  const {
    variant,
    title,
    buttonType,
    icon,
    disabled,
    iconStyle,
    iconPosition
  } = props;
  const classModify = variant || "primary-default";
  const buttonFAB = !title ? style["button--FAB"] : "";
  const iconOutline = iconStyle
    ? style[`button--${classModify}--icon-${iconStyle}`]
    : "";
  const buttonClassName = classNames(
    style["button"],
    style[`button--${classModify}`],
    buttonFAB,
    iconOutline,
    {
      "button--fullWidth": props.fullWidth
    }
  );
  const buttonStyle = {
    width: props.fullWidth ? "100%" : props.size,
    height: props.size
  };

  const renderIconMargin = (margin = "right") => {
    let newMargin = "";
    if (title) {
      newMargin = margin;
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
