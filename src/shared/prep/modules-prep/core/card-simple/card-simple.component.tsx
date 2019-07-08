import * as React from "react";
import { Link } from "react-router-dom";
import "./card-simple-component.scss";
import { IconComponent, ImageComponent } from "@app/prep/modules-prep/core";
import { CHEVRON_RIGHT } from "@app/constants/icons";
import classNames from "classnames";

interface ICardSimpleProps {
  icon?: string;
  link: string;
  title?: string;
  variant?: string;
}

const CardSimple = ({ title, icon, link, variant }: ICardSimpleProps) => {
  const buttonClassName = classNames("card-simple", {
    [`card-simple--${variant}`]: variant
  });

  return (
    <Link to={link} className={buttonClassName}>
      {icon && (
        <div className="card-simple__image">
          <ImageComponent src={icon} />
        </div>
      )}
      <div className="card-simple__title">{title}</div>
      <IconComponent icon={CHEVRON_RIGHT} size="5px" />
    </Link>
  );
};
export { CardSimple };
