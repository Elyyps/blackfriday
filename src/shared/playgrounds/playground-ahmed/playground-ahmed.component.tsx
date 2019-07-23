import * as React from "react";
import { SelectComponent } from "@app/core/select";
import { ModalComponent } from "@app/core/modal";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => (
  <div className="uk-container">
    <SelectComponent onSelect={() => ""} options={["Relevance", "Newest", "Price"]} />
  </div>
);

export { PlaygroundAhmedComponent };
