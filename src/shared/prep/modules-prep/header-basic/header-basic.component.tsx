import * as React from "react";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/prep/modules-prep/core";
import "./header-basic-component.scss";
import IconBack from "@assets/icons/chevron-left.svg";

export interface IHeaderBasicComponentProps {
  backButtonText?: string;
  backButtonURL?: string;
  title?: string;
}

const HeaderBasicComponent = (props: IHeaderBasicComponentProps) => (
  <div className="header-basic">
    <div className="uk-container">
      <ul className="uk-visible@s header-basic__breadcrumbs">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Alle blogs</Link>
        </li>
      </ul>

      {props.backButtonURL && (
        <Link
          className="uk-hidden@s header-basic__back"
          to={props.backButtonURL}
        >
          <IconComponent icon={IconBack} size={"6px"} />
          {props.backButtonText}
        </Link>
      )}

      {props.title && <h1>{props.title}</h1>}
    </div>
  </div>
);

export { HeaderBasicComponent };
