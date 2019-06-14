import * as React from "react";
import "./button.component.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/prep/modules-prep/core";
import IconDefault from "@assets/icons/link.svg";
import classNames from "classnames";

interface IButtonProps {
  classNames?: void;
  href?: string;
  icon?: any;
  onClick?: any;
  target?: string;
  title: any;
  type?: string;
  variant?: string;
}

const Button = (props: IButtonProps) => {
  const { href, variant, target, title, type, icon, ...other } = props;
  const classModify = variant || "default";
  const buttonClassName = classNames("button", {
    [`button--${classModify}`]: classModify
  });

  return (
    <React.Fragment>
      {href ? (
        <Link {...other} to={href} className={buttonClassName} target={target}>
          {title}
          <IconComponent icon={icon || IconDefault} size="14px" />
        </Link>
      ) : (
        <button {...other} type={type} className={buttonClassName}>
          {title}
          <IconComponent icon={icon || IconDefault} size="14px" />
        </button>
      )}
    </React.Fragment>
  );
};

export { Button };
