/* tslint:disable */
import * as React from "react";

import { ShopSingleHeaderComponent } from "@app/modules/shop-single-header";
import { dummyShopSingleHeaderData } from "@app/api/modules/shop-single-header/generate-dummy-data";
import { PageProgressBarComponent } from "@app/core/page-progress-bar";
import styles from "./playground-pedro-component.module.scss";
import { FeaturedShopsComponent } from "@app/modules/featured-shops/featured-shops.component";
import { dummyFeaturedShopsData } from "@app/api/modules/featured-shops/generate-dummy-data";
import { MobileFilterComponent, mobileFilterDummyData } from "@app/core/mobile-filter";
import { IMobileFilterItem } from "@app/core/mobile-filter/mobile-filter-item";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => {
  const [currentItems, setCurrentItems] = React.useState<IMobileFilterItem[]>(mobileFilterDummyData);

  return (
    <div className={styles["playground-pk"]}>
      <div className={styles["playground-pk__header"]}>
        <PageProgressBarComponent value={50} />
      </div>
      <FeaturedShopsComponent {...dummyFeaturedShopsData()} />
    </div>
  );
};

export { PlaygroundPedroComponent };
