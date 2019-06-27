import * as React from "react";
import { Link } from "react-router-dom";
import style from "./link-component.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import classNames from "classnames";

export interface ILinkComponentProps {
  animated?: boolean;
  children: any;
  icon?: string;
  to: string;
  variant?: "primary" | "secondary" | "tertiary";
}

const LinkComponent = (props: ILinkComponentProps) => {
  const { icon, to, variant, animated } = props;
  const defaultVariant = variant || "primary";
  const linkClassName = classNames(
    style["link"],

    style[`link--${defaultVariant}`],
    { [style["link--animated"]]: animated }
  );

  return (
    <Link className={linkClassName} to={to}>
      {props.children}
      {icon && <IconComponent icon={icon} size="14px" />}
    </Link>
  );
};

export { LinkComponent };
