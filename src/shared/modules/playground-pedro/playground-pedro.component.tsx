import * as React from "react";

import { FeaturedShopsComponent } from "../featured-shops";
import { getFeaturedShopsDummyData } from "@app/api/modules/featured-shops";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => <FeaturedShopsComponent {...getFeaturedShopsDummyData()} />;

export { PlaygroundPedroComponent };
