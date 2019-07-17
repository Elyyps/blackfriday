import * as React from "react";

import { FeaturedDealsComponent } from "../featured-deals/featured-deals.component";
import { getFeaturedDealsDummyData } from "@app/api/modules/featured-deals/endpoints";
import { MobileFilterComponent } from "@app/core/mobile-filter";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => (
  <MobileFilterComponent
    onClose={() => {
      console.log("closed");
    }}
    sortBy={["Alphabetically"]}
    categories={[]}
    status={["Nu geldig", "Bijna verlopen"]}
    brands={["Nike", " Adidas", " New Balance"]}
  />
);

export { PlaygroundPedroComponent };
