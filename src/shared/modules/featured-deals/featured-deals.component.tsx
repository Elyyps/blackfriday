import * as React from "react";
import styles from "./featured-deals-component.module.scss";
import { SeeMoreCardComponent } from "@app/core/see-more-card";
import { DealCardComponent } from "@app/core/deal-card";
import { FeaturedDealsModule } from "@app/api/modules/featured-deals/featured-deals.module";

export interface IFeaturedDealsComponentProps {
  featuredDealsModule: FeaturedDealsModule;
}

const FeaturedDealsComponent = (props: IFeaturedDealsComponentProps) => {
  const { deals, title, seeMoreCard } = props.featuredDealsModule;

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
          <SeeMoreCardComponent
            title={seeMoreCard.title}
            buttonText={seeMoreCard.link.title}
            buttonLink={seeMoreCard.link.url}
            icon={seeMoreCard.icon}
          />
        </div>
      </div>
    </div>
  );
};

export { FeaturedDealsComponent };
