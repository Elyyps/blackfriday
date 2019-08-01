import * as React from "react";
import { generateStoreOverviewModule } from "@app/api/modules/store-overview/generate-dummy-data";
import { StoreOverviewContainer } from "@app/modules/store-overview/containers/store-overview.container";

export interface IPlaygroundTomComponentProps {}

const PlaygroundTomComponent = (props: IPlaygroundTomComponentProps) => (
  <div>
    <StoreOverviewContainer storeOverviewModule={generateStoreOverviewModule()} />
  </div>
);

export { PlaygroundTomComponent };
