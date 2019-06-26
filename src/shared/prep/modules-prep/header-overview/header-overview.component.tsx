import * as React from "react";
import "./header-overview-component.scss";
import { HeaderBasicComponent } from "@app/prep/modules-prep/header-basic";
import { FeaturedBlogComponent } from "../featured-blog";

export interface IHeaderOverviewComponentProps {
  backButtonText?: string;
  backButtonURL?: string;
  image?: string;
  items?: any[];
  title?: string;
}

const HeaderOverviewComponent = (props: IHeaderOverviewComponentProps) => (
  <div className="header-overview">
    <HeaderBasicComponent
      title={props.title}
      backButtonText={props.backButtonText}
      backButtonURL={props.backButtonURL}
    />
    <div className="uk-container">
      <FeaturedBlogComponent items={props.items} />
    </div>
  </div>
);

export { HeaderOverviewComponent };
