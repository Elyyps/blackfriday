import * as React from "react";
import styles from "./clickable-component.module.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/core/icon";
import classNames from "classnames";

export type ButtonVariant =
  | "primary-default"
  | "primary-brand"
  | "primary-inverted"
  | "secondary"
  | "secondary-inverted"
  | "tertiary"
  | "tertiary-inverted"
  | "link-primary"
  | "link-secondary"
  | "link-tertiary";

export type IconStyle = "outline" | "filled" | "outline-fill";

export interface IClickableComponentProps {
  animated?: boolean;
  buttonType?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  icon?: string;
  iconPosition?: string;
  iconStyle?: IconStyle;
  onClick?: () => void;
  size?: number;
  target?: "_blank" | "_self";
  title?: string;
  variant?: ButtonVariant;
}

const renderIconMargin = (margin = "right", title: string | undefined, icon: string | undefined) => {
  let style;
  if (title) {
    style = styles[`icon-${margin}`];
  }

  return (
    <span className={style}>
      <IconComponent icon={icon} size="14px" />
    </span>
  );
};

const renderIconText = (icon: string | undefined, iconPosition: string | undefined, title: string | undefined) => {
  const showTextOnTheLeft = (icon && iconPosition === "right") || (icon && !iconPosition);
  const showTextOnTheRight = icon && iconPosition === "left";

  return (
    <span className={styles["icon-svg"]}>
      {showTextOnTheLeft && title}
      {icon ? renderIconMargin(iconPosition, title, icon) : title}
      {showTextOnTheRight && title}
    </span>
  );
};

const ClickableComponent = (props: IClickableComponentProps) => {
  const {
    buttonType,
    animated,
    onClick,
    href,
    variant,
    title,
    icon,
    disabled,
    iconStyle,
    iconPosition,
    target
  } = props;
  const classModify = variant || "primary-default";
  const buttonFAB = !title ? styles["button--FAB"] : "";
  const animatedIcon = animated ? styles[`button--animated`] : "";
  const iconOutline = iconStyle ? styles[`button--${classModify}--icon-${iconStyle}`] : "";
  const buttonClassName = classNames(
    styles["button"],
    styles[`button--${classModify}`],
    buttonFAB,
    iconOutline,
    animatedIcon,
    {
      "button--fullWidth": props.fullWidth
    }
  );
  const buttonStyle = {
    width: props.fullWidth ? "100%" : props.size,
    height: props.size
  };

  if (href) {
    const regex = "https://|http://";
    const isExternalLink = href.match(regex) !== null ? true : false;

    if (isExternalLink) {
      return (
        <a target={target || "_blank"} className={buttonClassName} style={buttonStyle} href={href}>
          {renderIconText(icon, iconPosition, title)}
        </a>
      );
    }

    return (
      <Link target={target || "_self"} className={buttonClassName} style={buttonStyle} to={href}>
        {renderIconText(icon, iconPosition, title)}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      style={buttonStyle}
      type={buttonType}
      name={title}
      className={buttonClassName}
      onClick={onClick}
    >
      <span className={styles["icon-svg"]}>{renderIconText(icon, iconPosition, title)}</span>
    </button>
  );
};

export { ClickableComponent };
