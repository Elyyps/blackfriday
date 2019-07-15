import * as React from "react";

import { FeaturedDealsComponent } from "@app/modules/featured-deals/";
import { getFeaturedDealsDummyData } from "@app/api/modules/featured-deals/endpoints";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => <FeaturedDealsComponent {...getFeaturedDealsDummyData()} />;

export { PlaygroundPedroComponent };
