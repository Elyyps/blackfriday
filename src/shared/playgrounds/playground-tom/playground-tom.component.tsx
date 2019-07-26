import * as React from "react";

import { StoresOverviewComponent } from "@app/modules/stores-overview-new/stores-overview.component";

export interface IPlaygroundTomComponentProps {}

const PlaygroundTomComponent = (props: IPlaygroundTomComponentProps) => (
  <div>
    <StoresOverviewComponent />
  </div>
);

export { PlaygroundTomComponent };
