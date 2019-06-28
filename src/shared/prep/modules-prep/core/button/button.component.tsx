import * as React from "react";
import "./button.component.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/prep/modules-prep/core";
import IconDefault from "@assets/icons/link.svg";
import ArrowDown from "@assets/icons/chevron-down.svg";
import classNames from "classnames";

interface IButtonProps {
  classNames?: void;
  href?: string;
  icon?: any;
  onClick?: any;
  position?: string;
  target?: string;
  title: any;
  type?: string;
  variant?: string;
}

const Button = (props: IButtonProps) => {
  const {
    href,
    variant,
    target,
    title,
    type,
    icon,
    position,
    ...other
  } = props;
  const classModify = variant || "default";
  const buttonClassName = classNames("button", {
    [`button--${classModify}`]: classModify,
    [`button--icon-${position}`]: position
  });

  return (
    <React.Fragment>
      {href ? (
        <Link {...other} to={href} className={buttonClassName} target={target}>
          <span>{title}</span>
          {icon ? <IconComponent icon={icon || IconDefault} size="12px" /> : ""}
        </Link>
      ) : (
        <button {...other} type={type} className={buttonClassName}>
          <span>{title}</span>
          <IconComponent icon={icon || IconDefault} size="12px" />
          {variant === "dropdown" && (
            <div className="button__arrow">
              <IconComponent icon={ArrowDown} size={"10px"} />
            </div>
          )}
        </button>
      )}
    </React.Fragment>
  );
};

export { Button };
