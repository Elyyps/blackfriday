import * as React from "react";
import "./featured-categories-component.scss";
import { CardSimple } from "@app/prep/modules-prep/core";

export interface IFeaturedCategoriesComponentProps {
  bgcolor?: string;
  buttonMore?: any[];
  items?: any[];
  paddingBottom?: string;
  paddingTop?: string;
  title?: string;
}

const FeaturedCategoriesComponent = (
  props: IFeaturedCategoriesComponentProps
) => {
  const styles = {
    backgroundColor: props.bgcolor,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom
  };

  return (
    <div className="featured-categories" style={styles}>
      <div className="uk-container">
        <div className="featured-categories__holder">
          {props.items &&
            props.items.map((item, key) => (
              <div key={key}>
                <CardSimple {...item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { FeaturedCategoriesComponent };
