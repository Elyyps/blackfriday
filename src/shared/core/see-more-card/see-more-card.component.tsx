import * as React from "react";
import styles from "./see-more-card-component.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import { Link } from "@app/api/core/link";
import { LinkComponent } from "../link";
import { getArrow } from "@app/constants/icons";
import { ShadowCardComponent } from "../shadow-card";

export interface ISeeMoreCardComponentProps {
  icon: string;
  link: Link;
  title: string;
}

const SeeMoreCardComponent = (props: ISeeMoreCardComponentProps) => {
  const { title, link, icon } = props;

  return (
    <ShadowCardComponent>
      <div className={styles["see-more-card"]}>
        <div className={styles["see-more-card__content"]}>
          <div className={styles["see-more-card__icon"]}>
            <IconComponent size="24px" icon={icon} />
          </div>
          <div className={styles["see-more-card__title"]}>{title}</div>
        </div>
        <LinkComponent to={link.url} icon={getArrow(false)} animated variant="tertiary">
          {link.title}
        </LinkComponent>
      </div>
    </ShadowCardComponent>
  );
};

export { SeeMoreCardComponent };
