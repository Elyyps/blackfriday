import * as React from "react";
import "./header-info-component.scss";
import {
  ImageComponent,
  IconComponent,
  SharedBox
} from "@app/prep/modules-prep/core";

export interface IHeaderInfoComponentProps {
  bgcolor?: string;
  content?: string;
  icon?: string;
  image?: string;
  paddingBottom?: string;
  title: string;
}

const HeaderInfoComponent = (props: IHeaderInfoComponentProps) => {
  const styles = {
    backgroundColor: props.bgcolor,
    paddingBottom: props.paddingBottom
  };

  return (
    <div className="header-info" style={styles}>
      {props.image && (
        <div className="header-info__image">
          <ImageComponent src={props.image} />
        </div>
      )}
      <div className="uk-container">
        <div className="header-info__body">
          {props.icon && (
            <div className="header-info__icon">
              <IconComponent icon={props.icon} size="14px" />
            </div>
          )}
          <div className="header-info__content">
            <h1 className="header-info__title">
              <strong>{props.title}</strong>
            </h1>
            {props.content}
          </div>
          <SharedBox title={"Delen"} />
        </div>
      </div>
    </div>
  );
};

export { HeaderInfoComponent };
