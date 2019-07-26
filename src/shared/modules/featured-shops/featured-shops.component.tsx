import * as React from "react";
import styles from "./featured-shops-component.module.scss";
import { SeeMoreCard } from "@app/api/core/see-more-card";
import { ShopCardComponent } from "@app/core/shop-card";
import { SeeMoreCardComponent } from "@app/core/see-more-card";
import { ShopCardModule } from "@app/api/core/shop-card";

export interface IFeaturedShopsComponentProps {
  seeMoreCard: SeeMoreCard;
  shops: ShopCardModule[];
  title: string;
}

const FeaturedShopsComponent = (props: IFeaturedShopsComponentProps) => {
  const { shops, title, seeMoreCard } = props;
  const INLINE_LIMIT = 4;

  return (
    <div className={styles["featured-shops"]}>
      <h2 className={styles["featured-shop__title"]}>{title}</h2>
      <div
        className={`${shops.length > INLINE_LIMIT && styles[`featured-shops__list-blocks`]} ${
          styles["featured-shops__list"]
        }`}
      >
        {shops.map((shop, key) => (
          <div className={shops.length <= INLINE_LIMIT ? `${styles[`featured-shop__item-${key}`]}` : ""} key={key}>
            <ShopCardComponent
              key={key}
              subtitle={shop.timeLeftBar.text}
              buttonLink={shop.button.url}
              title={shop.title}
              range={shop.timeLeftBar.value}
              image={shop.picture}
              buttonText={shop.button.title}
              content={shop.content}
              seeMoreLink={shop.seeMore && shop.seeMore.url}
              seeMoreText={shop.seeMore && shop.seeMore.title}
            />
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
