import * as React from "react";
import styles from "./cta-small-component.module.scss";
import { ShadowCardComponent } from "@app/core/shadow-card";
import { IconComponent } from "@app/core/icon/icon.component";
import { Button } from "@app/core/button";

export interface ICtaSmallComponentProps {
  buttonClick?: () => void;
  buttonTitle?: string;
  icon?: any;
  text?: string;
}

const CtaSmallComponent = (props: ICtaSmallComponentProps) => {
  const { buttonClick, buttonTitle, icon, text } = props;

  return (
    <div className={styles["cta-small"]}>
      <div className="uk-container">
        <ShadowCardComponent borderRadius={["2px"]}>
          <div className={styles["cta-small__wrapper"]}>
            {icon && (
              <div className={styles["icon"]}>
                <IconComponent icon={icon} size="32px" />
              </div>
            )}
            <div className={styles["cta-small__title"]}>{text}</div>
            {buttonTitle && <Button onClick={buttonClick} title={buttonTitle} variant="primary-brand" />}
          </div>
        </ShadowCardComponent>
      </div>
    </div>
  );
};

export { CtaSmallComponent };
