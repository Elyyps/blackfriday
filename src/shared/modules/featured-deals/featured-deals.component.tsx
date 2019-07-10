import * as React from "react";
import styles from "./featured-deals-component.module.scss";
import { SeeMoreCard } from "@app/api/core/see-more-card";
import { SeeMoreCardComponent } from "@app/core/see-more-card";
import { DealCard } from "@app/api/core/deal-card";
import { DealCardComponent } from "@app/core/deal-card";

export interface IFeaturedDealsComponentProps {
  deals: [DealCard, DealCard, DealCard, DealCard];
  seeMoreCard: SeeMoreCard;
  title: string;
}

const FeaturedDealsComponent = (props: IFeaturedDealsComponentProps) => {
  const { deals, title, seeMoreCard } = props;

  return (
    <div className={styles["featured-deals"]}>
      <h2 className={styles["featured-deals__title"]}>{title}</h2>
      <div className={styles["featured-deals__list"]}>
        {deals.map((deal, key) => (
          <div className={styles[`featured-deals__item-${key}`]} key={key}>
            <DealCardComponent
              key={key}
              label={deal.label}
              subtitle={deal.subtitle}
              buttonLink={deal.button.url}
              title={deal.title}
              oldPrice={deal.oldPrice}
              image={deal.picture}
              buttonText={deal.button.title}
              newPrice={deal.newPrice}
              sale={deal.discountText}
            />
          </div>
        ))}
        <div>
          <SeeMoreCardComponent title={seeMoreCard.title} link={seeMoreCard.link} icon={seeMoreCard.icon} />
        </div>
      </div>
    </div>
  );
};

export { FeaturedDealsComponent };
