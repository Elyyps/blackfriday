import * as React from "react";

import { FeaturedDealsComponent } from "../featured-deals/featured-deals.component";
import { getFeaturedDealsDummyData } from "@app/api/modules/featured-deals/endpoints";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => <FeaturedDealsComponent {...getFeaturedDealsDummyData()} />;

export { PlaygroundPedroComponent };
