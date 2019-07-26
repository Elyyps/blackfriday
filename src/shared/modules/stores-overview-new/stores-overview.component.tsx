import * as React from "react";

import { FilterBar } from "@app/core/filter-bar-new/filter-bar.component";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (props: IStoresOverviewComponentProps) => (
  <div>
    <div>Stores overview</div>
    <div>
      <FilterBar />
    </div>
  </div>
);

export { StoresOverviewComponent };
