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
  total?: number;
}

const ArrowPanel = ({ link: { title, url }, icon, image }: IArrowPanelProps) => {
  const pictureSize = `${image ? styles["image-container__image"] : styles["image-container__icon"]}`;
  const picture = `${image ? image : icon}`;

  return (
    <Link to={url} className={`${styles["card-simple"]}`}>
      <div className={styles["content"]}>
        {(image || icon) && (
          <div className={styles["image-container"]}>
            <ImageComponent alt="Arrow icon" className={pictureSize} src={picture} />
          </div>
        )}
        <div className={styles["title"]}>{title}</div>
      </div>
      <div className={styles["icon"]}>
        <IconComponent icon={CHEVRON_RIGHT} size="10px" strokeColor="#474747" strokeWidth="3px" />
      </div>
    </Link>
  );
};
export { ArrowPanel };
