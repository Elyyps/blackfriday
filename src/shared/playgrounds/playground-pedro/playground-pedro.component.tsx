import * as React from "react";

import { ShopSingleHeaderComponent } from "@app/modules/shop-single-header";
import { dummyShopSingleHeaderData } from "@app/api/modules/shop-single-header/generate-dummy-data";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => <ShopSingleHeaderComponent {...dummyShopSingleHeaderData} />;

export { PlaygroundPedroComponent };
