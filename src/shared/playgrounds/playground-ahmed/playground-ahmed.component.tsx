import * as React from "react";
import { TabComponent } from "@app/core/tab/tab.component";
import { StoresOverviewContainer } from "@app/modules/stores-overview/container/stores-overview.container";

export interface IPlaygroundAhmedComponentProps {}
export interface ITest {
  content: JSX.Element;
  title: string;
}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => {
  const data: ITest[] = [
    { title: "fdsfds", content: <StoresOverviewContainer /> },
    { title: "ds", content: <h1>sdfsdfds</h1> }
  ];

  return (
    <div className="uk-container">
      <TabComponent data={data} />
    </div>
  );
};

export { PlaygroundAhmedComponent };
