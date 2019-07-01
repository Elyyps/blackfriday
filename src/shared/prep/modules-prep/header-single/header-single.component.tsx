import * as React from "react";
import "./header-single-component.scss";
import { HeaderBasicComponent } from "@app/prep/modules-prep/header-basic";
import { ImageComponent } from "@app/prep/modules-prep/core";

export interface IHeaderSingleComponentProps {
  backButtonText?: string;
  backButtonURL?: string;
  image?: string;
  title?: string;
}

const HeaderSingleComponent = (props: IHeaderSingleComponentProps) => (
  <div className="header-single">
    <HeaderBasicComponent
      title={props.title}
      backButtonText={props.backButtonText}
      backButtonURL={props.backButtonURL}
    />
    <div className="uk-container">
      <div className="header-single__image">
        <ImageComponent src={props.image} />
      </div>
    </div>
  </div>
);

export { HeaderSingleComponent };
