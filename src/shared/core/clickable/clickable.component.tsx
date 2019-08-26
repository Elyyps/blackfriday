import React, { useEffect } from "react";
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
  | "link-tertiary"
  | "link-quaternary";

export type IconStyle = "outline" | "filled" | "outline-fill";

export interface IClickableComponentProps {
  animated?: boolean;

  buttonType?: "submit" | "reset" | "button";
  disabled?: boolean;
  disableSelect?: boolean;
  dynamicSize?: boolean;
  fullWidth?: boolean;
  href?: string;
  iconFillColor?: string;
  iconLeft?: string;
  iconRight?: string;
  iconStyle?: IconStyle;
  onClick?: () => void;
  size?: number;
  target?: "_blank" | "_self";
  title?: string;
  variant?: ButtonVariant;
  zIndex?: number;
}

const renderIconMargin = (
  margin: string,
  title: string | undefined,
  icon: string | undefined,
  iconFillColor: string | undefined
) => {
  let style;
  if (title) {
    style = `${styles[`icon-${margin}`]} `;
  }

  return (
    <span className={style}>
      <IconComponent icon={icon} size="14px" fillColor={iconFillColor} />
    </span>
  );
};

const renderIconText = (
  iconLeft: string | undefined,
  iconRight: string | undefined,
  title: string | undefined,
  iconFillColor: string | undefined
) => {
  const showTextOnTheCenter = iconRight && iconLeft;

  return (
    <span className={styles["icon-svg"]}>
      {iconLeft && renderIconMargin(showTextOnTheCenter ? "center" : "left", title, iconLeft, iconFillColor)}
      {title}
      {iconRight && renderIconMargin(showTextOnTheCenter ? "center" : "right", title, iconRight, iconFillColor)}
    </span>
  );
};

const ClickableComponent = (props: IClickableComponentProps) => {
  const [iconText, setIconText] = React.useState<JSX.Element>(
    renderIconText(props.iconLeft, props.iconRight, props.title, props.iconFillColor)
  );
  useEffect(() => setIconText(renderIconText(props.iconLeft, props.iconRight, props.title, props.iconFillColor)), [
    props.iconLeft,
    props.iconRight,
    props.title
  ]);
  const { buttonType, disableSelect, onClick, href, variant, title, disabled, iconStyle, target, zIndex } = props;

  const classModify = variant || "primary-default";
  const buttonFAB = !title ? styles["button--FAB"] : "";
  const animated = props.animated ? styles["animated"] : "";
  const noSelect = disableSelect ? styles[`no-select`] : "";
  const iconOutline = iconStyle ? styles[`button--${classModify}--icon-${iconStyle}`] : "";
  const buttonClassName = classNames(
    styles["button"],
    styles[`button--${classModify}`],
    buttonFAB,
    animated,
    iconOutline,
    noSelect,
    {
      "button--fullWidth": props.fullWidth
    },
    {
      "button__dynamic-size": props.dynamicSize
    }
  );
  const buttonStyle = {
    width: props.fullWidth ? "100%" : props.size,
    height: props.size,
    zIndex
  };

  if (href) {
    const regex = "https://|http://";
    const isExternalLink = href.match(regex) !== null ? true : false;

    if (isExternalLink) {
      return (
        <a target={target || "_blank"} className={buttonClassName} style={buttonStyle} href={href}>
          {iconText}
        </a>
      );
    }

    return (
      <Link target={target || "_self"} className={buttonClassName} style={buttonStyle} to={href}>
        {iconText}
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
      <span className={styles["icon-svg"]}>{iconText}</span>
    </button>
  );
};

export { ClickableComponent };
