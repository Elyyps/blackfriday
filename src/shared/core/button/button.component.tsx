import * as React from "react";
import style from "./button-component.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IconComponent } from "@app/core/icon/icon.component";

interface IButtonProps {
  buttonType?: string;
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
  type?: any;
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
  const classModify = variant || "default";
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

  const renderIconMargin = (marginPosition = "right") => (
    <span className={style[`icon-${marginPosition}`]}>
      <IconComponent icon={icon} size="14px" />
    </span>
  );

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
            {(icon && iconPosition === "right") || !iconPosition
              ? props.title
              : ""}
            {icon ? renderIconMargin(iconPosition) : props.title}
            {icon && iconPosition === "left" ? props.title : ""}
          </span>
        </button>
      )}
    </React.Fragment>
  );
};

export { Button };
