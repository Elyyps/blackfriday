/* tslint:disable */
import * as React from "react";

import { ShopSingleHeaderComponent } from "@app/modules/shop-single-header";
import { PageProgressBarComponent } from "@app/core/page-progress-bar";
import styles from "./playground-pedro-component.module.scss";
import { FeaturedShopsComponent } from "@app/modules/featured-shops/featured-shops.component";
import { dummyFeaturedShopsData } from "@app/api/modules/featured-shops/generate-dummy-data";
import { MobileFilterComponent, mobileFilterDummyData } from "@app/core/mobile-filter";
import { IMobileFilterItem } from "@app/core/mobile-filter/mobile-filter-item";
import { StarsRatingComponent } from "@app/core/stars-rating";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => {
  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <StarsRatingComponent showRating voteTrigger={() => alert("voted")} rating={2.5} />
    </div>
  );
};

export { PlaygroundPedroComponent };
