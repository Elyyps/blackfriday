import * as React from "react";
import { TabComponent, ITabsInterface } from "@app/core/tab/tab.component";
import { StoresOverviewContainer } from "@app/modules/stores-overview/container/stores-overview.container";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => {
  const data: ITabsInterface[] = [
    { title: "Winkels", content: <StoresOverviewContainer />, index: 1 },
    { title: "Productdeals", content: <h1>Will be implemented</h1>, index: 2 }
  ];

  return (
    <div className="uk-container">
      <TabComponent tabs={data} />
    </div>
  );
};

export { PlaygroundAhmedComponent };
