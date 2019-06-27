import * as React from "react";
import { LinkComponent } from "@app/core/link";
import { getArrow } from "@app/constants/icons";

import styles from "./playground-pedro-component.module.scss";
import { TimeLeftBarComponent } from "@app/core/time-left-bar";
import { ShopCardComponent } from "@app/core/shop-card";
import { FeaturedShopsComponent } from "../featured-shops";
import { dummyFeaturedShopsData } from "@app/api/modules/featured-shops/generate-dummy-data";
import { getFeaturedShopsDummyData } from "@app/api/modules/featured-shops";

export interface IPlaygroundPedroComponentProps {}


const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div className={styles['playground-pk']}>
    <FeaturedShopsComponent {...getFeaturedShopsDummyData()} />
  </div>
);

export { PlaygroundPedroComponent };
