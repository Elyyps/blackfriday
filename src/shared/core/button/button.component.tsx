import * as React from "react";
import style from "./button-component.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IconComponent } from "@app/core/icon/icon.component";

type ButtonType =
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
  href?: string;
  icon?: string;
  iconPosition?: string;
  onClick?: any;
  size?: number;
  target?: string;
  title?: string;
  variant?: string;
}

const Button = (props: IButtonProps) => {
  const {
    href,
    variant,
    target,
    title,
    buttonType,
    icon,
    disabled,
    iconPosition
  } = props;
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
      {href ? (
        <Link
          style={buttonStyle}
          to={disabled ? "" : href}
          className={buttonClassName}
          target={target}
        >
          {title}
          {icon && <IconComponent icon={icon} size="14px" />}
        </Link>
      ) : (
        <button
          disabled={disabled}
          style={buttonStyle}
          type={buttonType}
          name={title}
          className={buttonClassName}
          onClick={!disabled && props.onClick}
        >
          <span className={style["icon-svg"]}>
            {(icon && iconPosition === "right") || (icon && !iconPosition)
              ? title
              : ""}
            {icon ? renderIconMargin(iconPosition) : title}
            {icon && iconPosition === "left" ? title : ""}
          </span>
        </button>
      )}
    </React.Fragment>
  );
};

export { Button };
