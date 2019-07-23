/* tslint:disable */
import * as React from "react";
import styles from "./playground-pedro-component.module.scss";
import { NavBarComponent } from "../nav-bar";
import { generateDummyNavbarData } from "@app/api/modules/navbar/generate-dummy-data";
import { FeaturedDealsComponent } from "../featured-deals";
import { getFeaturedDealsDummyData } from "@app/api/modules/featured-deals/endpoints";
import { FeaturedShopsComponent } from "../featured-shops/featured-shops.component";
import { getFeaturedShopsDummyData } from "@app/api/modules/featured-shops/endpoints";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div className={styles["playground-pk"]}>
    <NavBarComponent navBarModule={generateDummyNavbarData()} />
    {/* <div>
      <FeaturedDealsComponent {...getFeaturedDealsDummyData()} />
    </div>
    <div>
      <FeaturedShopsComponent {...getFeaturedShopsDummyData()} />
    </div> */}
  </div>
);

export { PlaygroundPedroComponent };
