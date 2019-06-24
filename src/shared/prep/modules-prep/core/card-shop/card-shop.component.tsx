import * as React from "react";
import "./card-shop.scss";
import { ImageComponent, Button } from "@app/prep/modules-prep/core";
import classNames from "classnames";

interface ICardShopProps {
  button_link?: any;
  button_text?: any;
  content?: any;
  image?: any;
  range?: any;
  sub_title?: any;
  title?: any;
  variant?: string;
}

const CardShop = (props: ICardShopProps) => {
  const {
    title,
    sub_title,
    content,
    image,
    range,
    button_text,
    button_link,
    variant
  } = props;

  const statusBarFilled = {
    width: `calc( ${range} * 100%)`
  };

  const statusBar = (rangeNumber: any) => {
    const limit = 0.5;
    if (rangeNumber > limit) {
      return "green";
    }

    if (rangeNumber === "0") {
      return "none";
    }

    if (rangeNumber <= limit) {
      return "orange";
    }
  };

  return (
    <div
      className={classNames("card-shop", `card-shop--${variant || "default"}`)}
    >
      <div className="card-shop__body">
        <div className="card-shop__image">
          <ImageComponent src={image} />
        </div>
        {range && (
          <div className={`card-shop__status ${statusBar(range)}`}>
            <div className="card-shop__status-title">{sub_title}</div>
            <div className="card-shop__status-bar">
              <div
                className="card-shop__status-bar-filled"
                style={statusBarFilled}
              />
            </div>
          </div>
        )}
        <div className="card-shop__content">
          <div className="card-shop__title">{title}</div>
          {content}
        </div>
      </div>
      <div className="card-shop__action">
        <Button title={button_text} href={button_link} variant={"primary"} />
      </div>
    </div>
  );
};
export { CardShop };
