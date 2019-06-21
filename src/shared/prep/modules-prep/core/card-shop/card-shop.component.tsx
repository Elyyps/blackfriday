import * as React from "react";
import "./card-shop.scss";

interface ICardShopProps {
  button_link?: any;
  button_text?: any;
  content?: any;
  image?: any;
  meer_info_link?: any;
  range?: any;
  sub_title?: any;
  title?: any;
}

const CardShop = (props: ICardShopProps) => {
  const {
    title,
    sub_title,
    content,
    meer_info_link,
    image,
    range,
    button_text,
    button_link
  } = props;

  return (
    <div>
      {title}
      {sub_title}
      {content}
      {meer_info_link}
      {image}
      {range}
      {button_text}
      {button_link}
    </div>
  );
};
export { CardShop };
