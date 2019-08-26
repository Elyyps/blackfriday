import * as React from "react";
import styles from "./featured-shops-component.module.scss";
import { SeeMoreCard } from "@app/api/core/see-more-card";
import { ShopCardComponent } from "@app/core/shop-card";
import { SeeMoreCardComponent } from "@app/core/see-more-card";
import { Store } from "@app/api/core/store/store";

export interface IFeaturedShopsComponentProps {
  seeMoreCard: SeeMoreCard;
  stores: Store[];
  title: string;
}

const FeaturedShopsComponent = (props: IFeaturedShopsComponentProps) => {
  const { stores, title, seeMoreCard } = props;
  const INLINE_LIMIT = 4;

  return (
    <div className={styles["featured-shops"]}>
      <h2 className={styles["featured-shop__title"]}>{title}</h2>
      <div
        className={`${stores.length > INLINE_LIMIT && styles[`featured-shops__list-blocks`]} ${
          styles["featured-shops__list"]
        }`}
      >
        {stores.map((store, key) => (
          <div className={stores.length <= INLINE_LIMIT ? `${styles[`featured-shop__item-${key}`]}` : ""} key={key}>
            <ShopCardComponent store={store} />
          </div>
        ))}
        <div>
          <SeeMoreCardComponent
            buttonText={seeMoreCard.link.title}
            title={seeMoreCard.title}
            buttonLink={seeMoreCard.link.url}
            icon={seeMoreCard.icon}
          />
        </div>
      </div>
    </div>
  );
};

export { FeaturedShopsComponent };
