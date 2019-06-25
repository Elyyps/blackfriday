import * as React from "react";
import "./cta-small-component.scss";
import { Button, IconComponent } from "@app/prep/modules-prep/core";

export interface ICtaSimpleComponentProps {
  bgcolor?: string;
  buttonLink?: string;
  buttonTitle?: string;
  icon?: any;
  title?: string;
}

const CtaSmallComponent = (props: ICtaSimpleComponentProps) => {
  const styles = {
    backgroundColor: props.bgcolor
  };

  return (
    <div className="cta-simple" style={styles}>
      <div className="uk-container">
        <div className="cta-simple__holder">
          {props.icon && <IconComponent icon={props.icon} size={"26px"} />}
          <div className="cta-simple__title">{props.title}</div>
          {props.buttonTitle && (
            <Button title={props.buttonTitle} href={props.buttonLink} />
          )}
        </div>
      </div>
    </div>
  );
};

export { CtaSmallComponent };
