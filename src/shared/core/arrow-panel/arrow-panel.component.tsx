import * as React from "react";
import styles from "./arrow-panel-component.module.scss";
import { IconComponent, ImageComponent } from "@app/core";
import { Link as ILink } from "@app/api/core/link";
import { CHEVRON_RIGHT } from "@app/constants/icons";
import { Link } from "react-router-dom";

export interface IArrowPanelProps {
  icon?: string;
  image?: string;
  link: ILink;
}

const ArrowPanel = ({ link: { title, url }, icon, image }: IArrowPanelProps) => (
  <Link to={url} className={`${styles["card-simple"]}`}>
    <div className={styles["content"]}>
      {(image || icon) && (
        <div className={styles["image-container"]}>
          {image && (
            <ImageComponent alt="Arrow icon" height={"100%"} width={"100%"} className={styles["image"]} src={image} />
          )}
          {icon && <ImageComponent alt="Arrow icon" height={"60%"} width={"60%"} src={icon} />}
        </div>
      )}
      <div className={styles["title"]}>{title}</div>
    </div>
    <div className={styles["icon"]}>
      <IconComponent icon={CHEVRON_RIGHT} size="10px" strokeColor="#474747" strokeWidth="3px" />
    </div>
  </Link>
);
export { ArrowPanel };
