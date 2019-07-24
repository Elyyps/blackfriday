import * as React from "react";
import styles from "./cta-small-component.module.scss";
import { ShadowCardComponent } from "@app/core/shadow-card";
import { IconComponent } from "@app/core/icon/icon.component";
import { ClickableComponent } from "@app/core/clickable";

export interface ICtaSmallComponentProps {
  buttonTitle?: string;
  href?: string;
  icon?: any;
  onClick?: () => void;
  text?: string;
}

const CtaSmallComponent = (props: ICtaSmallComponentProps) => {
  const { buttonTitle, href, icon, onClick, text } = props;

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
            {buttonTitle && (
              <ClickableComponent href={href} onClick={onClick} title={buttonTitle} variant="primary-brand" />
            )}
          </div>
        </ShadowCardComponent>
      </div>
    </div>
  );
};

export { CtaSmallComponent };
