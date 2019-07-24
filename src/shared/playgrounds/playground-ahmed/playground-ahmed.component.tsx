import * as React from "react";
import { TabComponent } from "@app/core/tab";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => {
  const titles: string[] = ["Winkels", "Productdeals"];

  return (
    <div className="uk-container">
      <TabComponent titles={titles} />
    </div>
  );
};

export { PlaygroundAhmedComponent };
