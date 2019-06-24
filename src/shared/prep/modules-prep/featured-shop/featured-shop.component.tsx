import * as React from "react";
import "./featured-shop-component.scss";
import { CardShop } from "@app/prep/modules-prep/core/card-shop";
import CoolBlue from "@assets/cool-blue.svg";
import Wehkamp from "@assets/logo-wehkamp.svg";

export interface IFeaturedShopComponentProps {
  bgcolor?: string;
  title?: string;
}

const Cards = [
  {
    title: "Title",
    sub_title: "Actie nog onbekend",
    range: "0",
    content: "Een selectie van bizarre vele aanbiedingen.",
    image: CoolBlue,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Title",
    sub_title: "Nu geldig",
    range: ".7",
    content: "Een selectie van bizarre vele aanbiedingen. Meer info",
    image: Wehkamp,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Title",
    sub_title: "Nu geldig",
    range: ".7",
    content: "Een selectie van bizarre vele aanbiedingen.",
    image: CoolBlue,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Title",
    sub_title: "Bijna afgelopen!",
    range: ".1",
    content: "Een selectie van bizarre vele aanbiedingen. Meer info",
    image: Wehkamp,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Title",
    sub_title: "Bijna afgelopen!",
    range: ".1",
    content: "Een selectie van bizarre vele aanbiedingen.",
    image: CoolBlue,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Title",
    sub_title: "Bijna afgelopen!",
    range: ".1",
    content: "Een selectie van bizarre vele aanbiedingen. Meer info",
    image: Wehkamp,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Title",
    sub_title: "Bijna afgelopen!",
    range: ".1",
    content: "Een selectie van bizarre vele aanbiedingen.",
    image: CoolBlue,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Title",
    sub_title: "Nu geldig",
    range: ".6",
    content: "Een selectie van bizarre vele aanbiedingen. Meer info",
    image: Wehkamp,
    button_text: "Naar deals",
    button_link: "#"
  }
];

const FeaturedShopComponent = (props: IFeaturedShopComponentProps) => (
  <div className="featured-shop">
    <div className="uk-container">
      <h2 className="featured-shop__title">{props.title}</h2>
      <div className="uk-grid-posts uk-grid uk-grid-small uk-child-width-1-5@m">
        {Cards.map((item, key) => (
          <div key={key}>
            <CardShop {...item} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export { FeaturedShopComponent };
