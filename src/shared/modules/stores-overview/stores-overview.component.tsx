import * as React from "react";
import styles from "./stores-overview-component.module.scss";

import { FilterBarComponent } from "@app/core/filter-bar";
import { generateData } from "@app/api/core/shop-card";
import { ShopCardComponent } from "@app/core/shop-card";
import { StoresOverviewContainerProps } from "./container/stores-overview.container";
import { RouteComponentProps } from "react-router";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (
  props: IStoresOverviewComponentProps & StoresOverviewContainerProps
) => {
  const connectClass = "uk-switcher-list";
  const switcherAttr = { "data-uk-switcher": `connect: .${connectClass}` };

  React.useEffect(() => {
    props.getShopCards("", [], [], "");
  }, []);

  return (
    <div className={styles["stores-overview"]}>
      <div className="uk-container">
        <div className={styles["stores-overview__header"]}>
          <FilterBarComponent />
        </div>
        <div className={styles["stores-overview__body"]}>
          {props.shopCards &&
            props.shopCards.map((item, key) => (
              <div key={key} className={styles["stores-overview__body__cards"]}>
                <ShopCardComponent
                  title={item.title}
                  url={item.button.url}
                  seeMoreText={item.seeMore.title}
                  image={item.picture}
                  content={item.content}
                  button_text={item.button.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { StoresOverviewComponent };
