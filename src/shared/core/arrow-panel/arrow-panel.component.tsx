import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./arrow-panel-component.module.scss";
import { IconComponent, ImageComponent } from "@app/core";
import { CHEVRON_RIGHT } from "@app/constants/icons";

interface ICardSimpleProps {
  brands?: string[];
  icon?: string;

  onClick?: () => void;
  title?: string;
  variant?: string;
}
const MAX_ITEMS = 3;
const LAST_ITEM_INDEX = -2;
const ArrowPanelComponent = ({ title, brands, icon, onClick, variant }: ICardSimpleProps) => {
  const [listBrands, setListBrands] = React.useState("");
  React.useEffect(() => {
    let listWords = "";
    if (brands) {
      if (brands.length > MAX_ITEMS) {
        for (let i = 0; i < MAX_ITEMS - 1; i = +1) {
          listWords = `${listWords}${brands[i]}, `;
        }
        listWords = `${listWords}${brands[MAX_ITEMS]}...`;
      } else {
        brands.map(brand => {
          listWords = `${listWords}${brand}, `;
        });
        listWords = listWords.slice(0, LAST_ITEM_INDEX);
      }
    }
    setListBrands(listWords);
  }, []);

  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      role="button"
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
      <IconComponent icon={CHEVRON_RIGHT} size="5px" />
      <div className={styles["card-simple__body"]}>
        {!icon && <div className={styles["card-simple__list-brands"]}>{listBrands}</div>}
      </div>
    </div>
  );
};
export { ArrowPanelComponent };
