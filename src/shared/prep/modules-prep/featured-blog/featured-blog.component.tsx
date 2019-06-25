import * as React from "react";
import "./featured-blog-component.scss";
import { Link } from "react-router-dom";
import { ImageComponent } from "@app/prep/modules-prep/core";

export interface IFeaturedBlogComponentProps {
  bgcolor?: string;
  items?: any[];
  title?: string;
}

const FeaturedBlogComponent = (props: IFeaturedBlogComponentProps) => {
  const styles = {
    backgroundColor: props.bgcolor
  };

  return (
    <div className="featured-blog" style={styles}>
      <div className="uk-container">
        <h2 className="featured-blog__title">{props.title}</h2>
        <div className="featured-blog__body">
          {props.items &&
            props.items.map((item, key) => (
              <div key={key}>
                <Link to={item.link} className="featured-blog__card">
                  <div className="featured-blog__card-image">
                    <ImageComponent src={item.image} />
                  </div>
                  <h3 className="featured-blog__card-title">{item.title}</h3>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { FeaturedBlogComponent };
