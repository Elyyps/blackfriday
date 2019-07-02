import * as React from "react";
import { Link } from "react-router-dom";
import "./card-simple-component.scss";
import { IconComponent, ImageComponent } from "@app/prep/modules-prep/core";
import { CHEVRON_RIGHT } from "@app/constants/icons";

interface ICardSimpleProps {
  content?: JSX.Element;
  icon?: string;
  link: string;
  title?: string;
}

const CardSimple = ({ title, icon, link }: ICardSimpleProps) => (
  <Link to={link} className="card-simple">
    {icon && (
      <div className="card-simple__image">
        <ImageComponent src={icon} />
      </div>
    )}
    <div className="card-simple__title">{title}</div>
    <IconComponent icon={CHEVRON_RIGHT} size="5px" />
  </Link>
);
export { CardSimple };
