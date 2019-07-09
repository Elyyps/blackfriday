import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./arrow-panel-component.module.scss";
import { IconComponent, ImageComponent } from "@app/core";
import { CHEVRON_RIGHT } from "@app/constants/icons";
import classNames from "classnames";

interface ICardSimpleProps {
  brands?: string[];
  icon?: string;
  link: string;
  title?: string;
  variant?: string;
}

const ArrowPanel = ({ title, brands, icon, link, variant }: ICardSimpleProps) => {
  const [listBrands, setListBrands] = React.useState("");
  React.useEffect(() => {
    let listWords = "";
    if (brands) {
      if (brands.length > 3) {
        for (let i = 0; i < 2; i++) {
          listWords += `${brands[i]}, `;
        }
        listWords += `${brands[3]}..."`;
      } else {
        listWords += brands.map(brand => `${brand}, `);
        listWords = listBrands.slice(0, -2);
      }
    }
    setListBrands(listWords);
  }, []);

  return (
    <Link
      to={link}
      className={`${styles["card-simple"]} ${variant ? styles[`card-simple--${variant}`] : ""}  ${
        brands ? styles[`card-simple--list-brands`] : ""
      }`}
    >
      {icon && (
        <div className={styles["card-simple__image"]}>
          <ImageComponent src={icon} />
        </div>
      )}
      <div className={styles["card-simple__title"]}>{title}</div>
      <div className={styles["card-simple__body"]}>
        <div className={styles["card-simple__list-brands"]}>{listBrands}</div>
        <IconComponent icon={CHEVRON_RIGHT} size="5px" />
      </div>
    </Link>
  );
};
export { ArrowPanel };
