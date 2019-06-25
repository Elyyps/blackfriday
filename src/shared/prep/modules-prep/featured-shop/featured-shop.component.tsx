import * as React from "react";
import "./featured-shop-component.scss";
import { CardShop, CardButton } from "@app/prep/modules-prep/core";

export interface IFeaturedShopComponentProps {
  bgcolor?: string;
  buttonMore?: any[];
  items?: any[];
  title?: string;
}

const FeaturedShopComponent = (props: IFeaturedShopComponentProps) => {
  const styles = {
    backgroundColor: props.bgcolor
  };

  return (
    <div className="featured-shop" style={styles}>
      <div className="uk-container">
        <h2 className="featured-shop__title">{props.title}</h2>
        <div className="uk-grid-posts uk-grid uk-grid-small uk-child-width-1-3@s uk-child-width-1-5@m">
          {props.items &&
            props.items.map((item, key) => (
              <div key={key}>
                <CardShop {...item} />
              </div>
            ))}
          {props.buttonMore &&
            props.buttonMore.map((item, i) => (
              <div key={i}>
                <CardButton {...item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { FeaturedShopComponent };
