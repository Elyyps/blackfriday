import * as React from "react";
import styles from "./cta-small-component.module.scss";
import { ShadowCardComponent } from "@app/core/shadow-card";
import { IconComponent } from "@app/core/icon/icon.component";
import { Button } from "@app/core/button";

export interface ICtaSmallComponentProps {
  bgColor?: string;
  buttonClick?: () => void;
  buttonTitle?: string;
  icon?: any;
  paddingBottom?: string;
  paddingTop?: string;
  text?: string;
}

const CtaSmallComponent = (props: ICtaSmallComponentProps) => {
  const { bgColor, buttonClick, buttonTitle, icon, paddingBottom, paddingTop, text } = props;

  const inlineStyles = {
    bgColor,
    paddingTop,
    paddingBottom
  };

  return (
    <div className={styles["cta-small"]} style={inlineStyles}>
      <div className="uk-container">
        <ShadowCardComponent borderRadius={["2px"]}>
          <div className={styles["cta-small__wrapper"]}>
            {icon && <IconComponent icon={icon} size="32px" />}
            <div className={styles["cta-small__title"]}>{text}</div>
            {buttonTitle && <Button onClick={buttonClick} title={buttonTitle} variant="primary-brand" />}
          </div>
        </ShadowCardComponent>
      </div>
    </div>
  );
};

export { CtaSmallComponent };
