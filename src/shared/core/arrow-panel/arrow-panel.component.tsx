import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./arrow-panel-component.module.scss";
import { IconComponent, ImageComponent } from "@app/core";
import { Link as ILink } from "@app/api/core/link";
import { CHEVRON_RIGHT } from "@app/constants/icons";

export interface IArrowPanelProps {
  icon?: string;
  link: ILink;
}

const ArrowPanel = ({ link: { title, url }, icon }: IArrowPanelProps) => (
  <Link to={url} className={`${styles["card-simple"]}`}>
    <div className={styles["content"]}>
      {icon && (
        <div className={styles["image"]}>
          <ImageComponent src={icon} />
        </div>
      )}
      <div className={styles["title"]}>{title}</div>
    </div>
    <div className={styles["icon"]}>
      <IconComponent icon={CHEVRON_RIGHT} size="10px" />
    </div>
  </Link>
);
export { ArrowPanel };
