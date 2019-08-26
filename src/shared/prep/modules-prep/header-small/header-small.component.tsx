import * as React from "react";
import "./header-small-component.scss";
import { USP } from "@app/prep/modules-prep/core/usp";
import { ImageComponent } from "@app/prep/modules-prep/core";

export interface IHeaderSmallComponentProps {
  image?: any;
  sub_title?: string;
  title?: string;
}

const HeaderSmallComponent = ({ image, title, sub_title }: IHeaderSmallComponentProps) => (
  <div className="header-small">
    <div className="uk-container">
      <div className="header-small__top">
        <USP />
      </div>
      <div className="header-small__holder">
        <div className="header-small__image">
          <ImageComponent src={image} />
        </div>
        {title && (
          <div className="header-small__content">
            <h1 className="header-small__title">{title}</h1>
            <h2 className="header-small__subtitle">{sub_title}</h2>
          </div>
        )}
      </div>
    </div>
  </div>
);

export { HeaderSmallComponent };
