import * as React from "react";
import { Link } from "react-router-dom";
import "./card-button.scss";
import { IconComponent, ImageComponent } from "@app/prep/modules-prep/core";
import Chevron from "@assets/icons/chevron-right.svg";
import classNames from "classnames";

interface ICardButtonProps {
  button_link?: any;
  button_text?: any;
  image?: any;
  title?: any;
  variant?: string;
}

const CardButton = (props: ICardButtonProps) => {
  const { title, image, button_text, button_link, variant } = props;

  return (
    <Link
      to={button_link}
      className={classNames(
        "card-button",
        `card-button--${variant || "default"}`
      )}
    >
      <div className="card-button__head">
        <div className="card-button__image">
          <ImageComponent src={image} />
        </div>
        <div className="card-button__title">{title}</div>
      </div>
      <div className="card-button__link">
        {button_text}
        <IconComponent icon={Chevron} size={"5px"} />
      </div>
    </Link>
  );
};
export { CardButton };
