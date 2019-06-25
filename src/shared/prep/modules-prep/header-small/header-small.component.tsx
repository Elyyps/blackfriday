import * as React from "react";
import "./header-small-component.scss";
import { USP } from "@app/prep/modules-prep/core/usp";
import { ImageComponent } from "@app/prep/modules-prep/core";

export interface IHeaderSmallComponentProps {
  image?: any;
  subtitle?: string;
  title?: string;
}

const HeaderSmallComponent = (props: IHeaderSmallComponentProps) => (
  <div className="header-small">
    <div className="uk-container">
      <div className="header-small__top">
        <USP />
      </div>
      <div className="header-small__holder">
        <div className="header-small__image">
          <ImageComponent src={props.image} />
        </div>
        {props.title && (
          <div className="header-small__content">
            <h1 className="header-small__title">{props.title}</h1>
            <h2 className="header-small__subtitle">{props.subtitle}</h2>
          </div>
        )}
      </div>
    </div>
  </div>
);

export { HeaderSmallComponent };
