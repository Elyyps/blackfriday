import * as React from "react";
import styles from "./see-more-card-component.module.scss";
import { IconComponent } from "@app/core";
import { LinkComponent } from "../link";
import { getArrow } from "@app/constants/icons";

export interface ISeeMoreCardComponentProps {
  buttonLink: string;
  buttonText: string;
  icon: string;
  title: string;
  variant?: string;
}

const SeeMoreCardComponent = (props: ISeeMoreCardComponentProps) => {
  const { title, buttonLink, buttonText, variant, icon } = props;

  return (
    <div className={`${styles["see-more-card"]} ${styles[`see-more-card--${variant ? variant : "default"}`]}`}>
      <div className={styles["see-more-card__content"]}>
        <div className={styles["see-more-card__icon"]}>
          <IconComponent size="24px" icon={icon} />
        </div>
        <div className={styles["see-more-card__title"]}>
          <h4>{title}</h4>
        </div>
      </div>
      <LinkComponent to={buttonLink} icon={getArrow(false)} animated variant="tertiary">
        {buttonText}
      </LinkComponent>
    </div>
  );
};

export { SeeMoreCardComponent };
