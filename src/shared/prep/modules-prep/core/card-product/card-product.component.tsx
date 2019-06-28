import * as React from "react";
import "./card-product.scss";
import { ImageComponent, Button } from "@app/prep/modules-prep/core";
import classNames from "classnames";
import IconDefault from "@assets/icons/link.svg";

interface ICardProductProps {
  button_link?: any;
  button_text?: string;
  content?: any;
  image?: any;
  old_price?: string;
  price?: string;
  sale?: string;
  sub_title?: string;
  title?: string;
  variant?: string;
}

const CardProduct = (props: ICardProductProps) => {
  const {
    image,
    sub_title,
    title,
    sale,
    price,
    old_price,
    button_text,
    button_link,
    variant
  } = props;

  return (
    <div
      className={classNames(
        "card-product",
        `card-product--${variant || "default"}`
      )}
    >
      <div className="card-product__body">
        <div className="card-product__image">
          <ImageComponent src={image} />
        </div>
        <div className="card-product__content">
          <div className="card-product__subtitle">{sub_title}</div>
          <div className="card-product__title">{title}</div>
        </div>
      </div>
      <div className="card-product__action">
        <div className="card-product__price">
          <div className="card-product__sale">{sale}</div>
          <div className="card-product__price-box">
            <div className="card-product__price-old">{old_price}</div>
            <div className="card-product__price-new">{price}</div>
          </div>
        </div>
        <Button
          title={button_text}
          href={button_link}
          variant={"primary"}
          icon={IconDefault}
        />
      </div>
    </div>
  );
};
export { CardProduct };
