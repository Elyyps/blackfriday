import * as React from "react";
import "./featured-deals-component.scss";
import { CardProduct, CardButton } from "@app/prep/modules-prep/core";

export interface IFeaturedDealsComponentProps {
  bgcolor?: string;
  buttonMore?: any[];
  items?: any[];
  title?: string;
}

const FeaturedDealsComponent = (props: IFeaturedDealsComponentProps) => (
  <div className="featured-deals">
    <div className="uk-container">
      <h2 className="featured-deals__title">{props.title}</h2>
      <div className="uk-grid-posts uk-grid uk-grid-small uk-child-width-1-3@s uk-child-width-1-5@m">
        {props.items &&
          props.items.map((item, key) => (
            <div key={key}>
              <CardProduct {...item} />
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

export { FeaturedDealsComponent };
