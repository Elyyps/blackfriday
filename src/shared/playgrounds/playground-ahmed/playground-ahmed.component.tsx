import * as React from "react";
import { SelectComponent } from "@app/core/select";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => (
  <div className="uk-container">
    <SelectComponent onSelect={() => ""} options={["Relevance", "Newest", "Price"]} />
  </div>
);

export { PlaygroundAhmedComponent };
